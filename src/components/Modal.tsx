import { easeInOutAnimationDislocate } from "@/constants/animate";
// import { Dialog } from "@headlessui/react";
import { User } from "lucide-react";
import React, { Fragment, PropsWithChildren, useState } from "react";
import { Button, IButtonProps } from "./Button";

interface IModalProps extends PropsWithChildren {
  button?: IButtonProps;
  title: string;
}

export const Modal: React.FC<IModalProps> = ({ button, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button
        title={button?.title ?? ""}
        icon={button?.icon ?? <User />}
        variants={
          button?.variants ?? easeInOutAnimationDislocate({ delay: 0.7 })
        }
        color={button?.color ?? "gray"}
        onClick={() => setIsOpen(true)}
      />

      {/* {isOpen && ( 
        <Dialog
          as={motion.div}
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-10"
        >
          <div className="fixed inset-0 bg-black/80" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-100 p-6 text-left align-middle shadow-xl transition-all dark:bg-custom-gray-700">
                <Dialog.Title
                  as={motion.h3}
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-custom-gray-100"
                  {...easeInOutAnimationDislocate({})}
                >
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )} */}
    </Fragment>
  );
};
