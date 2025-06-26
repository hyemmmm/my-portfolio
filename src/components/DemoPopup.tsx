import { Dialog, DialogContent } from "@mui/material";
import type { ReactNode } from "react";

type DemoPopupProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const DemoPopup = ({ open, onClose, children }: DemoPopupProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={"md"}
      // fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "#2a2a2a",
          color: "#f5f5f5",
          borderRadius: 2,
          p: 2,
        },
      }}
    >
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default DemoPopup;
