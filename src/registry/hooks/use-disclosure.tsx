"use client";

import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { useCallback, useState } from "react";

export interface UseDisclosureProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
    const handleOpen = useCallbackRef(props.onOpen);
    const handleClose = useCallbackRef(props.onClose);
    const [uncontrolledOpen, setUncontrolledOpen] = useState(
        props.defaultOpen ?? false,
    );

    const isControlled = props.open !== undefined;
    const open = isControlled ? props.open : uncontrolledOpen;

    const onOpen = useCallback(() => {
        if (!isControlled) {
            setUncontrolledOpen(true);
        }
        handleOpen?.();
    }, [isControlled, handleOpen]);

    const onClose = useCallback(() => {
        if (!isControlled) {
            setUncontrolledOpen(false);
        }
        handleClose?.();
    }, [isControlled, handleClose]);

    const onOpenChange = useCallback(() => {
        if (open) {
            handleClose();
        } else {
            handleOpen();
        }
    }, [open, handleClose, handleOpen]);

    return {
        open,
        onOpen,
        onClose,
        onOpenChange,
    };
};

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
