import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import SectionCard from "../components/SectionCard";
import GlobalStyles from "../styles/GlobalStyles";
import loginPage from "../assets/images/3dnote/login_page.jpg";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
import PhotoPopup from "../components/PhotoPopup";

export default function ProjectDetail() {
  const { id } = useParams();

  const [openVideo, setOpenVideo] = useState(false);
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const project = projectData.find((item) => item.id === id);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setOpenImageDialog(true);
  };

  return (
    <>
      <GlobalStyles />
      <Container
        maxWidth={false}
        sx={{
          py: 8,
          backgroundColor: "#1e1e1e",
          color: "#f5f5f5",
          minHeight: "100vh",
          maxWidth: "1400px",
        }}
      >
        <Typography variant="h4" fontWeight={800} gutterBottom mb={6}>
          개발한 페이지 및 기능 ({id})
        </Typography>
        {project?.video && (
          <>
            <Box sx={{ mb: 4 }}>
              <Chip
                label="📽 video 보기"
                onClick={() => {
                  if (project.video.startsWith("https")) {
                    window.open(project.video, "_blank", "noopener,noreferrer");
                  } else {
                    setOpenVideo(true);
                  }
                }}
                clickable
                sx={{
                  fontSize: "16px",
                  px: 2,
                  py: 1,
                  backgroundColor: "#2c2c2c",
                  color: "#90caf9",
                  border: "1px solid #90caf9",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              />
            </Box>

            <Dialog
              open={openVideo}
              onClose={() => setOpenVideo(false)}
              maxWidth="md"
              fullWidth
            >
              <DialogContent
                sx={{ position: "relative", p: 0, background: "#000" }}
              >
                <IconButton
                  onClick={() => setOpenVideo(false)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 10,
                    color: "#fff",
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <video
                  ref={videoRef}
                  src={project.video}
                  autoPlay
                  controls
                  onLoadedMetadata={handleLoadedMetadata}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "80vh",
                    borderRadius: "8px",
                    display: "block",
                    backgroundColor: "#000",
                  }}
                />
              </DialogContent>
            </Dialog>
          </>
        )}

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Box
            sx={{
              mb: 6,
              p: 3,
              backgroundColor: "#2c2c2c",
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project?.skills?.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  sx={{
                    fontWeight: 500,
                    px: 1.3, // 좌우 여백
                    py: 1, // 상하 여백
                    fontSize: "15px", // 글씨 크기
                    color: "#90caf9",
                    borderColor: "#90caf9",
                    backgroundColor: "#2c2c2c",
                    borderRadius: "12px", // 조금 더 부드럽게
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4} alignItems="stretch">
          {project?.features?.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <SectionCard
                title={feature.title}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", md: "row" }}
                  alignItems="center"
                  gap={4}
                  sx={{ flexGrow: 1 }}
                >
                  {feature.image && (
                    <Box sx={{ flexShrink: 0 }}>
                      <img
                        src={feature.image}
                        alt={`${feature.title} 캡처`}
                        style={{
                          ...(feature.imageType === "mobile"
                            ? { height: "200px" }
                            : { width: "280px" }),
                          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                          maxWidth: "100%",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(feature.image)}
                      />
                    </Box>
                  )}

                  <Box sx={{ flexGrow: 1 }}>
                    {feature.items.map((item, idx) => (
                      <Typography key={idx} variant="body1" paragraph>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                              .replace(
                                /__(.*?)__/g,
                                '<u style="text-underline-offset: 3px;">$1</u>'
                              ),
                          }}
                        />
                      </Typography>
                    ))}

                    {feature.skills && feature.skills.length > 0 && (
                      <Box
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        {feature.skills.map((skill, i) => (
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
              </SectionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <PhotoPopup
        open={openImageDialog}
        onClose={() => setOpenImageDialog(false)}
        imageSrc={selectedImage}
      />
    </>
  );
}
