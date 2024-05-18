import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CountdownFormData } from "@/validation/countdown";
import { Control } from "react-hook-form";

interface CountdownInputProps {
  name: keyof CountdownFormData;
  control: Control<CountdownFormData>;
  maxValue?: number;
}

export function CountdownInput({
  name,
  control,
  maxValue,
}: CountdownInputProps): JSX.Element {
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
              className="h-12 w-full rounded border p-2 text-center text-lg font-medium shadow-sm hover:opacity-70 dark:text-custom-gray-100"
              maxLength={1}
              {...field}
              onChange={(event) => {
                const eventValue = event.target.value.at(-1) ?? 0;

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
}
