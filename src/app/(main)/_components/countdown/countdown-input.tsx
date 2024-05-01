import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CountdownFormData } from "@/validation/countdown";
import React from "react";
import { Control } from "react-hook-form";

interface CountdownInputProps {
  name: keyof CountdownFormData;
  control: Control<CountdownFormData>;
}

export const CountdownInput: React.FC<CountdownInputProps> = ({
  name,
  control,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              id={name}
              aria-label={name}
              type="number"
              className={cn(
                "h-12 w-full rounded border bg-slate-50 p-2 text-center text-lg font-medium shadow-sm hover:opacity-70 focus:border-blue-500 focus:outline-none dark:border-none dark:bg-custom-gray-500 dark:text-custom-gray-100",
                // error ? "border-red-200" : "border-slate-200",
              )}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
