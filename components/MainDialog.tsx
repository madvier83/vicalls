import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MainDialogProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const MainDialog = ({ title, children, open, onClose }: MainDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="p-8 bg-dark-1 border-none text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-center">
            {title}
          </DialogTitle>
          {/* <DialogDescription>
          </DialogDescription> */}
          <div className="pt-8">{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MainDialog;
