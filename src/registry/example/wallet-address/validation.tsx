import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { isAddress } from "@/registry/lib/wallet-address";
import { Input } from "@/registry/ui/input";
import { CheckCheckIcon, XIcon } from "lucide-react";
import { useState } from "react";

export const WalletAddressValidationDemo = () => {
  const [isEvmAddress, setIsEvmAddress] = useState<boolean>();
  const [isTronAddress, setIsTronAddress] = useState<boolean>();

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <div className="flex flex-col gap-1.5">
        <Label>EVM Address Check</Label>
        <Input
          variant="bordered"
          placeholder="0x..."
          onChange={(e) => {
            const value = e.target.value;
            setIsEvmAddress(isAddress(value));
          }}
          endContent={
            <span
              className={cn(
                "font-semibold",
                isEvmAddress ? "text-green-500" : "text-red-500",
              )}
            >
              {isEvmAddress ? <CheckCheckIcon /> : <XIcon />}
            </span>
          }
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Tron Address Check</Label>
        <Input
          variant="bordered"
          placeholder="T..."
          onChange={(e) => {
            const value = e.target.value;
            setIsTronAddress(isAddress(value, "tron"));
          }}
          endContent={
            <span
              className={cn(
                "font-semibold",
                isTronAddress ? "text-green-500" : "text-red-500",
              )}
            >
              {isTronAddress ? <CheckCheckIcon /> : <XIcon />}
            </span>
          }
        />
      </div>
    </div>
  );
};
