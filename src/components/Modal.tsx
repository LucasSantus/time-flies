// import { easeInOutAnimationDislocate } from "@/constants/animate";
// // import { Dialog } from "@headlessui/react";
// import { User } from "lucide-react";
// import React, { Fragment, PropsWithChildren, useState } from "react";
// import { Button, IButtonProps } from "./Button";

// interface IModalProps extends PropsWithChildren {
//   button?: IButtonProps;
//   title: string;
// }

// export const Modal: React.FC<IModalProps> = ({ button, title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Fragment>
//       <Button
//         title={button?.title ?? ""}
//         icon={button?.icon ?? <User />}
//         variants={
//           button?.variants ?? easeInOutAnimationDislocate({ delay: 0.7 })
//         }
//         color={button?.color ?? "gray"}
//         onClick={() => setIsOpen(true)}
//       />

//       {/* {isOpen && (
//         <Dialog
//           as={motion.div}
//           static
//           open={isOpen}
//           onClose={() => setIsOpen(false)}
//           className="relative z-10"
//         >
//           <div className="fixed inset-0 bg-black/80" />
//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex h-full items-center justify-center">
//               <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-100 p-6 text-left align-middle shadow-xl transition-all dark:bg-custom-gray-700">
//                 <Dialog.Title
//                   as={motion.h3}
//                   className="text-lg font-medium leading-6 text-gray-900 dark:text-custom-gray-100"
//                   {...easeInOutAnimationDislocate({})}
//                 >
//                   {title}
//                 </Dialog.Title>
//                 {children}
//               </Dialog.Panel>
//             </div>
//           </div>
//         </Dialog>
//       )} */}
//     </Fragment>
//   );
// };

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { DoorClosed } from "lucide-react";
import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ title, children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center p-4"
      >
        <Dialog.Content className="data-[state=open] w-full max-w-sm rounded bg-white p-4">
          <Dialog.Title className="m-0 text-[17px] font-medium">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
            description
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button
              className="h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
              aria-label="Close"
            >
              <DoorClosed />
              FHJSDKJFHJSDHKFJSDH
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </motion.div>
    </Dialog.Portal>
  </Dialog.Root>
);
