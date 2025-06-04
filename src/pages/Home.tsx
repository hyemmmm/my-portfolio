import { Box, Container, Typography, Grid, Chip, Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GlobalStyles from "../styles/GlobalStyles";
import { otherProjects, projectData } from "../data/projectData";
import { skillData } from "../data/skillData";
import styled from "@emotion/styled";
import SectionCard from "../components/SectionCard";
import { secondaryColor } from "../styles/colors";
import Experience from "../components/Experience";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles />
      <Container
        sx={{
          py: 8,
          backgroundColor: "#1e1e1e",
          color: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {/* Introduction */}
        <Box mb={8}>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            유저에게 실질적인 가치를 전달하는 프론트엔드 개발자 김혜민입니다.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            3년간 React.js를 중심으로 웹과 하이브리드 앱을 개발하며,{" "}
            <b>사용자가 실제로 편리함을 느낄 수 있는 경험을 만드는데 집중</b>해
            왔습니다. 단순히 기획된 기능을 구현하는데 그치지 않고,{" "}
            <b>
              예외 흐름을 고려한 UX 설계, 복잡한 기능을 직관적으로 표현하는 UI
              구현
            </b>
            , 그리고 <b>불편함을 줄이기 위한 개선 제안과 구현</b>까지 주도적으로
            수행해 왔습니다.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Three.js 기반의 3D 뷰어 개발, WebRTC를 활용한 실시간 통신 등{" "}
            <b>기술적 복잡도가 높은 환경에서도 구조적인 접근으로 문제를 해결</b>
            하며 팀의 개발 품질과 속도를 함께 끌어올렸습니다.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            앞으로도 ‘잘 동작하는 화면’을 넘어,{" "}
            <b>사용자에게 진짜 도움이 되는 경험</b>을 만드는 개발자가
            되겠습니다.
          </Typography>
        </Box>

        {/* Contact */}
        <SectionCard title="Contact">
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon fontSize="small" sx={{ mr: 1, color: secondaryColor }} />
            <Typography variant="body1">010-7705-5286</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon fontSize="small" sx={{ mr: 1, color: secondaryColor }} />
            <Typography variant="body1">hye04069@gmail.com</Typography>
          </Box>
        </SectionCard>

        {/* Experiences */}
        <SectionCard title="EXPERIENCES">
          <Experience
            title="컨워스 (2024.04 - ing)"
            subtitle="Frontend Engineer / 개발팀"
            items={[
              "건설 현장 관리 앱의 WebView 개발 및 유지 보수",
              "시설물 변화 탐지 솔루션의 웹 프론트엔드 개발",
              "3D 모델 송수신 기능을 가진 데스크탑 앱의 프론트엔드 개발",
            ]}
          />
          <Experience
            title="모밋 (2022.07 - 2024.03)"
            subtitle="Frontend Engineer / 개발팀"
            items={[
              "온라인 이력서 웹 서비스 개발 및 유지 보수",
              "관리자 페이지 개발 및 유지 보수",
              "해커톤 신청 페이지 개발 및 유지보수",
            ]}
          />
        </SectionCard>

        {/* Projects */}
        <SectionCard title="PROJECTS">
          {projectData.map((project, index) => (
            <Box key={index} mb={4}>
              <Typography variant="h6" fontWeight={600} sx={{}}>
                {project.title}
              </Typography>
              {project.period && (
                <Typography
                  variant="caption"
                  sx={{
                    fontStyle: "italic",
                    color: "#aaa",
                    display: "block",
                    mb: 1,
                  }}
                >
                  📅 {project.period}
                </Typography>
              )}

              <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
                {project.description}
              </Typography>
              <ViewDetail
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ fontWeight: "500", color: secondaryColor }}
              >
                자세히 보기 →
              </ViewDetail>
            </Box>
          ))}

          <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #444" }}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: "#90caf9", mb: 2 }}
            >
              기타 프로젝트
            </Typography>
          </Box>

          {otherProjects.map((project, index) => (
            <Box key={index} mb={3}>
              <Typography variant="subtitle1" fontWeight={600}>
                {project.title}
              </Typography>
              {project.period && (
                <Typography
                  variant="caption"
                  sx={{
                    fontStyle: "italic",
                    color: "#aaa",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  📅 {project.period}
                </Typography>
              )}
              <Typography variant="body2" sx={{ color: "#ddd" }}>
                {project.description}
              </Typography>
              {project.skills && (
                <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {project.skills.map((skill, i) => (
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
              {project.note && (
                <Typography variant="caption" sx={{ color: "#888", mt: 0.5 }}>
                  ※ {project.note}
                </Typography>
              )}
            </Box>
          ))}
        </SectionCard>

        {/* Skills */}
        <SectionCard title="SKILLS">
          <Grid container spacing={2}>
            {skillData.map((skill, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                <Chip
                  avatar={<Avatar alt={skill.label} src={skill.icon} />}
                  label={`${skill.label}`}
                  variant="outlined"
                  sx={{
                    fontWeight: 500,
                    color: secondaryColor,
                    borderColor: secondaryColor,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </SectionCard>
      </Container>
    </>
  );
}

const ViewDetail = styled.div`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
