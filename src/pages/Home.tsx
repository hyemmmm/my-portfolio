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
import LanguageToggle from "../components/LanguageToggle";
import { useTranslation } from "react-i18next";
import { careerSummaryData } from "../data/careerSummaryData";
import CareerSummaryItem from "../components/CareerSummaryItem";
import SideNav from "../components/SideNav";
import DemoPopup from "../components/DemoPopup";
import TreeviewDemoPopup from "../components/demoPopup/TreeviewDemoPopup";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState(null);
  const [demoPopup, setDemoPopup] = useState(false);

  const handleOpenProjectDetail = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <GlobalStyles />
      <SideNav />
      <PageWrapper>
        <LanguageToggleWrapper>
          <LanguageToggle />
        </LanguageToggleWrapper>

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

            <Typography
              variant="body1"
              paragraph
              sx={{ lineHeight: 1.8 }}
              mt={3}
            >
              ✅ <b>React</b> 기반으로 웹과 하이브리드 앱을 개발하며 <b>3년</b>
              간 다양한 프로젝트를 경험했습니다. 실제 사용 환경을 고려한 UI
              개발과 상태 관리, 반응형 설계에 익숙합니다.
            </Typography>

            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              ✅ Redux, Zustand, Recoil 등 다양한 <b>상태 관리</b> 라이브러리를
              사용해 복잡한 데이터 흐름을 구조적으로 관리해 왔고, 팀 내 개발
              환경 개선에도 기여했습니다.
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              ✅ 사내 WebRTC 라이브러리를 활용해 <b>실시간 데이터 통신</b>{" "}
              로직을 프론트엔드에 구조적으로 적용하고, 사용자 이벤트를 서버로
              전달해 <b>Three.js 3D 뷰어</b>에 실시간 반영되는 흐름을
              구현했습니다.
            </Typography>
          </Box>

          {/* Contact */}
          <div id="contact">
            <SectionCard title={t("contact")}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon
                  fontSize="small"
                  sx={{ mr: 1, color: secondaryColor }}
                />
                <Typography variant="body1">010-7705-5286</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon
                  fontSize="small"
                  sx={{ mr: 1, color: secondaryColor }}
                />
                <Typography variant="body1">hye04069@gmail.com</Typography>
              </Box>
            </SectionCard>
          </div>
          {/* Experiences */}
          <div id="experiences">
            <SectionCard title={t("experiences")}>
              <Experience
                title="컨워스 (2024.04 - ing)"
                subtitle="Frontend Engineer / 개발팀"
                items={[
                  "앱 내 WebView 환경에서의 건설 현장 관리 서비스 개발 및 유지 보수",
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
                  "Google Tag Manager 및 Analytics 연동을 통한 사용자 이벤트 수집 및 분석 로직 구현",
                ]}
              />
            </SectionCard>
          </div>

          {/* Career Summary */}
          <div id="career-summary">
            <SectionCard title={t("career-summary")}>
              {careerSummaryData.map((item) => (
                <CareerSummaryItem
                  key={item.id}
                  title={item.title}
                  period={item.period}
                  achievement={item.achievement}
                  roles={item.roles}
                  skills={item.skills}
                />
              ))}
            </SectionCard>
          </div>

          {/* Projects */}
          <div id="projects">
            <SectionCard title={t("projects")}>
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
          </div>

          {/* 구현 예제 */}
          <div id="examples">
            <SectionCard title={t("view-demo")}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                📂 TreeView 컴포넌트 (대용량 최적화)
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                대량의 노드 렌더링에서 느려지는 문제를 해결하기 위해, 기존
                라이브러리 대신 직접 단계적 로딩 방식으로 TreeView를
                구현했습니다. 노드 확장 시점에 비동기로 자식 데이터를 불러오며,
                성능과 사용자 경험을 동시에 고려한 구조입니다.
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <span
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#1976d2", // 강조색 (MUI primary)
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onClick={() => setDemoPopup(true)}
                >
                  미리보기
                </span>
                <a
                  href="https://github.com/hyemmmm/my-portfolio/blob/main/src/components/treeview/TreeView.tsx"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#eee",
                    color: "#333",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ddd")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#eee")
                  }
                >
                  코드 보기
                </a>
              </Box>
            </SectionCard>
            <TreeviewDemoPopup
              open={demoPopup}
              onClose={() => setDemoPopup(false)}
            />
          </div>

          {/* Skills */}
          <div id="skills">
            <SectionCard title={t("skills")}>
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
          </div>
        </Container>
        <EtcProjectDetail
          open={!!selectedProject}
          onClose={handleCloseDialog}
          project={selectedProject}
        />
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  position: relative;
  width: 90vw;
`;

const LanguageToggleWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 1000;
`;
