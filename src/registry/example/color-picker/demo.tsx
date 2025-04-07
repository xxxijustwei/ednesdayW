import { ColorPicker } from "@/registry/ui/color-picker";
import { useState } from "react";

export const ColorPickerDemo = () => {
    const [color, setColor] = useState("#4ec4b8");
    return <ColorPicker value={color} onChange={(value) => setColor(value)} />;
};
