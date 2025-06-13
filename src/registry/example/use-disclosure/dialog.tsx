"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useDisclosure } from "@/registry/hooks/use-disclosure";
import { Input } from "@/registry/ui/input";

export const UseDisclosureDialogDemo = () => {
  const { open, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-center w-full max-w-xs">
      <Button variant="outline" onClick={onOpen}>
        Edit Profile
      </Button>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" variant="bordered" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" variant="bordered" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
