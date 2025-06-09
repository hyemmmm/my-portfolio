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
import { useState } from "react";
import ProjectOverview from "../components/ProjectOverview";
import EtcProjectDetail from "../components/EtcProjectDetail";

export default function Home() {
  const navigate = useNavigate();

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProjectDetail = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

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
            유저에게 실질적 가치를 전달하는 프론트엔드 개발자 김혜민입니다.
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            3년간 React.js를 중심으로 <b>웹과 하이브리드 앱</b>을 개발해
            왔습니다.
            <b>사용자가 실제로 편리함을 느낄 수 있는 경험</b>을 만드는 데
            집중하며, 단순히 기획된 기능을 구현하는 것을 넘어 실제 사용 환경을
            고려한 설계를 지향합니다.
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            <b>복잡한 기능을 직관적으로 표현하는 UI 개발</b>,
            <b> 클라이언트-서버 간 데이터 흐름 처리</b>,
            <b> 다양한 디바이스 환경을 고려한 반응형 웹 디자인 적용</b> 등을
            통해 더 나은 사용자 경험을 위한 <b>기능 개선과 구현</b>을 주도적으로
            수행해 왔습니다.
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            또한 Three.js 기반의 3D 뷰어 개발, WebRTC 기반의 실시간 통신 등
            <b>
              {" "}
              기술적 복잡도가 높은 환경에서도 구조적인 접근으로 문제를 해결
            </b>
            하며 팀의 개발 품질과 속도를 함께 끌어올린 경험이 있습니다.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            앞으로도 ‘잘 동작하는 화면’을 넘어,
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
              "해커톤 신청 페이지 개발",
            ]}
          />
        </SectionCard>

        {/* Projects */}
        <SectionCard title="PROJECTS">
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            🚀 메인 프로젝트
          </Typography>
          {projectData.map((project, index) => (
            <ProjectOverview
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              onClickDetail={() => navigate(`/project/${project.id}`)}
            />
          ))}
          <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid #444" }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              📁 기타 프로젝트
            </Typography>
          </Box>
          {otherProjects.map((project, index) => (
            <ProjectOverview
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              onClickDetail={() => handleOpenProjectDetail(project)}
            />
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
      <EtcProjectDetail
        open={!!selectedProject}
        onClose={handleCloseDialog}
        project={selectedProject}
      />
    </>
  );
}
