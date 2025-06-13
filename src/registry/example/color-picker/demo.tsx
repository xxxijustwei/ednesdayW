import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/registry/ui/color-picker";
import { useState } from "react";

export const ColorPickerDemo = () => {
  const [hex, setHex] = useState("#4ec4b8");
  const [hexAlpha, setHexAlpha] = useState("#4ec4b880");

  return (
    <div className="flex flex-col gap-4 w-full max-w-32">
      <div className="flex gap-1.5 items-center">
        <ColorPicker value={hex} onChange={(value) => setHex(value)} />
        <div className="flex flex-col gap-0.5">
          <Label>Hex</Label>
          <span className="text-sm text-muted-foreground">{hex}</span>
        </div>
      </div>
      <div className="flex gap-1.5 items-center">
        <ColorPicker
          type="hex-alpha"
          value={hexAlpha}
          onChange={(value) => setHexAlpha(value)}
        />
        <div className="flex flex-col gap-0.5">
          <Label>Hex Alpha</Label>
          <span className="text-sm text-muted-foreground">{hexAlpha}</span>
        </div>
      </div>
    </div>
  );
};
