import { useDeviceDetection } from "@/registry/hooks/use-device-detection";

export const UseDeviceDetectionDemo = () => {
    const device = useDeviceDetection();

    return (
        <div className="w-full max-w-48 flex flex-col items-center justify-center">
            <p>Current Device: {device}</p>
        </div>
    );
};
