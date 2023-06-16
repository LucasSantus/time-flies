"use client";

import { useModal } from "@/hooks/useModal";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { PropsWithChildren, useEffect } from "react";

interface ModalProps extends PropsWithChildren {
  title?: string;
  trigger?: React.ReactNode;
  isOpenDefault?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  trigger,
  isOpenDefault,
  children,
}) => {
  const { isOpen, setIsOpen } = useModal();

  useEffect(() => {
    if (isOpenDefault) setIsOpen(isOpenDefault);
  }, [isOpenDefault, setIsOpen]);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <motion.div
          {...easeInOutAnimationVerticalDislocate({ delay: 0.7 })}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <DialogPrimitive.Content className="data-[state=open] w-full max-w-md transform overflow-hidden rounded-md bg-slate-100 p-4 text-left align-middle shadow-xl transition-all dark:bg-custom-gray-700">
            <div className="flex items-start justify-between ">
              <DialogPrimitive.Title className="text-lg font-medium leading-6 text-gray-900 dark:text-custom-gray-100">
                {title}
              </DialogPrimitive.Title>

              <DialogPrimitive.Close asChild>
                <button
                  className="flex h-6 w-6 appearance-none items-center justify-center"
                  aria-label="Close Modal"
                >
                  <X className="h-5 w-5 stroke-gray-500 hover:opacity-70" />
                </button>
              </DialogPrimitive.Close>
            </div>

            {children}
          </DialogPrimitive.Content>
        </motion.div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
