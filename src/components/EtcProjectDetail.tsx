// components/EtcProjectDetail.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    period?: string;
    description: string;
    descriptionDetail: string;
    skills?: string[];
    image?: string;
    isSampleImage?: boolean;
  } | null;
};

export default function EtcProjectDetail({ open, onClose, project }: Props) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "#2a2a2a",
          color: "#f5f5f5",
          borderRadius: 2,
          p: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 700,
        }}
      >
        {project.title}
        <IconButton onClick={onClose} size="small" sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {project.image && (
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: "auto",
              mb: 2,
              borderRadius: 1,
              border: "1px solid #444",
            }}
          />
        )}

        {project.isSampleImage && (
          <Typography
            variant="caption"
            sx={{ color: "#aaa", display: "block", mb: 2 }}
          >
            ※ 해당 이미지는 보안상 공개가 불가능하여, 샘플 이미지로
            대체되었습니다.
          </Typography>
        )}

        {project.period && (
          <Typography
            variant="caption"
            sx={{ fontStyle: "italic", color: "#ccc", display: "block", mb: 1 }}
          >
            📅 {project.period}
          </Typography>
        )}
        <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 2 }}>
          {project.description}
        </Typography>

        {project.descriptionDetail && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: "#1e1e1e",
              borderRadius: 1,
              border: "1px solid #444",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ mb: 1, color: "#90caf9", fontWeight: 600 }}
            >
              상세 설명
            </Typography>
            <Typography
              variant="body2"
              sx={{ whiteSpace: "pre-line", color: "#ccc" }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: project.descriptionDetail.replace(
                    /\*\*(.*?)\*\*/g,
                    "<b>$1</b>"
                  ),
                }}
              />
            </Typography>
          </Box>
        )}

        {project.skills && project.skills?.length > 0 && (
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 3 }}>
            {project.skills?.map((skill, i) => (
              <Chip
                key={i}
                label={skill}
                size="small"
                variant="outlined"
                sx={{
                  fontWeight: 500,
                  color: "#90caf9",
                  borderColor: "#90caf9",
                  backgroundColor: "#2c2c2c",
                }}
              />
            ))}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
