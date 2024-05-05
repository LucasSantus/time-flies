import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CountdownFormData } from "@/validation/countdown";
import React from "react";
import { Control } from "react-hook-form";

interface CountdownInputProps {
  name: keyof CountdownFormData;
  control: Control<CountdownFormData>;
  maxValue?: number;
}

export const CountdownInput: React.FC<CountdownInputProps> = ({
  name,
  control,
  maxValue,
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
                "h-12 w-full rounded border p-2 text-center text-lg font-medium text-custom-gray-100 shadow-sm hover:opacity-70",
                // error ? "border-red-200" : "border-slate-200",
              )}
              maxLength={1}
              {...field}
              onChange={(event) => {
                const eventValue = event.target.value.at(-1);

                if (maxValue) {
                  field.onChange(
                    Number(eventValue) > maxValue
                      ? String(maxValue)
                      : eventValue,
                  );

                  return;
                }

                field.onChange(eventValue);
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
