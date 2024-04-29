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
import { CountdownForm } from "./CountdownForm";

export function CountdownDialog(): JSX.Element {
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
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

        <CountdownForm />
      </DialogContent>
    </Dialog>
  );
}
