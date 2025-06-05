import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type PhotoPopupProps = {
  open: boolean;
  onClose: () => void;
  imageSrc: string | null;
};

export default function PhotoPopup({
  open,
  onClose,
  imageSrc,
}: PhotoPopupProps) {
  if (!imageSrc) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogContent sx={{ backgroundColor: "#000", p: 0 }}>
        <img
          src={imageSrc}
          alt="확대 이미지"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            display: "block",
            margin: "0 auto",
            backgroundColor: "#000",
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
