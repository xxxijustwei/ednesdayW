"use client";

import {
    type ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const COOKIE_NAME = "active_theme";
const DEFAULT_THEME = "default";

function setThemeCookie(theme: string) {
    if (typeof window === "undefined") return;

    document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${window.location.protocol === "https:" ? "Secure;" : ""}`;
}

type ThemeContextType = {
    activeTheme: string;
    setActiveTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
    children,
    initialTheme,
}: {
    children: ReactNode;
    initialTheme?: string;
}) {
    const [activeTheme, setActiveTheme] = useState<string>(
        () => initialTheme || DEFAULT_THEME,
    );

    useEffect(() => {
        const cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${COOKIE_NAME}=`));
        if (cookie) {
            const cookieTheme = cookie.split("=")[1];
            if (cookieTheme && cookieTheme !== activeTheme) {
                setActiveTheme(cookieTheme);
            }
        }
    }, []);

    useEffect(() => {
        setThemeCookie(activeTheme);

        for (const className of document.body.classList) {
            if (className.startsWith("theme-")) {
                document.body.classList.remove(className);
            }
        }
        document.body.classList.add(`theme-${activeTheme}`);
    }, [activeTheme]);

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function() {
                        try {
                        const themeCookie = document.cookie
                            .split('; ')
                            .find(row => row.startsWith('active_theme='));
                        if (themeCookie) {
                            const theme = themeCookie.split('=')[1];
                            document.body.classList.add('theme-' + theme);
                        }
                        } catch (e) {}
                    })();
                    `,
                }}
            />
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeConfig() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error(
            "useThemeConfig must be used within an ActiveThemeProvider",
        );
    }
    return context;
}
