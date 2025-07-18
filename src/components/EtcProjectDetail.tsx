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
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    period?: string;
    video?: string;
    description: string;
    descriptionDetail: string;
    skills?: string[];
    image?: string;
    isSampleImage?: boolean;
  } | null;
};

export default function EtcProjectDetail({ open, onClose, project }: Props) {
  if (!project) return null;

  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    setIsPortrait(false); // 초기화 (선택)
  }, [project.image]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalHeight > img.naturalWidth) {
      setIsPortrait(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isPortrait ? "md" : "sm"}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: isPortrait ? "row" : "column",
            gap: isPortrait ? "31px" : "0",
          }}
        >
          <Box>
            {project.image && (
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                onLoad={handleImageLoad}
                sx={{
                  width: isPortrait ? "auto" : "100%",
                  height: isPortrait ? "100%" : "auto",
                  maxHeight: 400,
                  mb: 2,
                  borderRadius: 1,
                  border: "1px solid #444",
                  objectFit: "contain",
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
          </Box>
          <Box
            sx={
              {
                // border: "1px solid red",
              }
            }
          >
            {project.video && (
              <Box sx={{ mb: 2 }}>
                <Chip
                  label="📽 video 보기"
                  component="a"
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                  sx={{
                    fontSize: "15px",
                    px: 2.5,
                    py: 1.2,
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      textDecoration: "none",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                />
              </Box>
            )}

            {project.period && (
              <Typography
                variant="caption"
                sx={{
                  fontStyle: "italic",
                  color: "#ccc",
                  display: "block",
                  mb: 1,
                }}
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
                  개발한 기능 및 상세 설명
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ whiteSpace: "pre-line", color: "#ccc" }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: project.descriptionDetail
                        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                        .replace(
                          /__(.*?)__/g,
                          '<u style="text-underline-offset: 3px;">$1</u>'
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
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
