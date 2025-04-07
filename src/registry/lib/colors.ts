interface hsl {
    h: number;
    s: number;
    l: number;
}

interface hex {
    hex: string;
}

type Color = hsl & hex;

const sanitizeHex = (val: string) => {
    const sanitized = val.replace(/[^a-fA-F0-9]/g, "").toUpperCase();

    if (![3, 6].includes(sanitized.length)) {
        return "000000";
    }

    return `#${sanitized}`;
};

const hslToHex = ({ h, s, l }: hsl) => {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
    const r = Math.round(255 * f(0));
    const g = Math.round(255 * f(8));
    const b = Math.round(255 * f(4));

    const toHex = (x: number) => {
        const hex = x.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    };

    return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

const hexToHsl = ({ hex }: hex): hsl => {
    hex = hex.replace(/^#/, "");

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    while (hex.length < 6) {
        hex += "0";
    }

    let r = Number.parseInt(hex.slice(0, 2), 16) || 0;
    let g = Number.parseInt(hex.slice(2, 4), 16) || 0;
    let b = Number.parseInt(hex.slice(4, 6), 16) || 0;

    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s: number;
    const l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
        h *= 360;
    }

    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
};

export { type hsl, type hex, type Color, sanitizeHex, hslToHex, hexToHsl };
