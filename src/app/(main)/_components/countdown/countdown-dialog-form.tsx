import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { CountdownForm } from "./countdown-form";

export function CountdownDialogForm(): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          icon={<Edit className="size-6" />}
          variant="gray"
          size="icon"
          className="h-14 w-16"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Editar Contagem</DialogTitle>
          <DialogDescription>
            Por favor, insira os valores abaixo para registrar a contagem no
            sistema.
          </DialogDescription>
        </DialogHeader>

        <CountdownForm />
      </DialogContent>
    </Dialog>
  );
}
