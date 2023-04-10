import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button, IButtonProps } from "../Button";
import { DropdownItem } from "./DropdownItem";

interface IDropdownProps {
  button: IButtonProps;
  items: any[];
}

export const Dropdown: React.FC<IDropdownProps> = ({ button, items }) => {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <Button {...button} />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-opacity-5">
            <div className="flex flex-col gap-1 p-1">
              {items.map((item) => (
                <Menu.Item key={item.id}>
                  <DropdownItem {...item} />
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
