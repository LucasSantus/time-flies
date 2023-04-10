import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { PencilSimple } from "phosphor-react";
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
      {!button ? (
        <Button
          title={title}
          className={classNames(EColorButton.GRAY, "p-5")}
          icon={<PencilSimple size={20} />}
          variants={animateButton({ delay: 0.7 })}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Button {...button} onClick={() => setIsOpen(true)} />
      )}

      <AnimatePresence>
        {isOpen && (
          <Dialog static as={motion.div} open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
            <div className="fixed inset-0 bg-black/80" />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex h-full items-center justify-center">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
