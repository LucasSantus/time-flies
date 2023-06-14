"use client";

import { useDialog } from "@/hooks/useDialog";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  title: string;
  trigger: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, trigger, children }) => {
  const { isOpen, setIsOpen } = useDialog();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <motion.div
          {...easeInOutAnimationVerticalDislocate({ delay: 0.7 })}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <Dialog.Content className="data-[state=open] w-full max-w-md transform overflow-hidden rounded-md bg-slate-100 p-4 text-left align-middle shadow-xl transition-all dark:bg-custom-gray-700">
            <div className="flex items-start justify-between ">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 dark:text-custom-gray-100">
                {title}
              </Dialog.Title>

              <Dialog.Close asChild>
                <button
                  className="flex h-6 w-6 appearance-none items-center justify-center"
                  aria-label="Close Modal"
                >
                  <X className="h-5 w-5 stroke-gray-500 hover:opacity-70" />
                </button>
              </Dialog.Close>
            </div>

            {children}
          </Dialog.Content>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
