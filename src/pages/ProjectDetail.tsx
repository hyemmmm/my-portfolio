import { Box, Container, Typography, Grid } from "@mui/material";
import SectionCard from "../components/SectionCard";
import GlobalStyles from "../styles/GlobalStyles";
import loginPage from "../assets/images/3dnote/login_page.jpg";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projectData.find((item) => item.id === id);

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
          개발한 페이지 및 기능 (3D Note)
        </Typography>

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
                  <Box sx={{ flexShrink: 0 }}>
                    <img
                      src={feature.image}
                      alt={`${feature.title} 캡처`}
                      style={{
                        height: "200px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    {feature.items.map((item, idx) => (
                      <Typography key={idx} variant="body1" paragraph>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
                          }}
                        />
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </SectionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
