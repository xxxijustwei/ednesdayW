import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const mobileRegex = /iphone|ipad|ipod|android|blackberry|windows phone/gi;
const tabletRegex = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/gi;

export const useDeviceDetection = () => {
    const [device, setDevice] = useState<DeviceType>("desktop");

    useEffect(() => {
        const handleDeviceDetector = () => {
            const userAgent = navigator.userAgent.toLocaleLowerCase();

            if (mobileRegex.test(userAgent)) {
                setDevice("mobile");
                return;
            }

            if (tabletRegex.test(userAgent)) {
                setDevice("tablet");
                return;
            }

            setDevice("desktop");
        };

        handleDeviceDetector();

        window.addEventListener("resize", handleDeviceDetector);

        return () => {
            window.removeEventListener("resize", handleDeviceDetector);
        };
    }, []);

    return device;
};

export type UseDeviceDetectionReturn = ReturnType<typeof useDeviceDetection>;
