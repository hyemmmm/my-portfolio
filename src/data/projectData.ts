import threeDNote from "../assets/images/3dnote/3d_view.png";
import changeD from "../assets/images/change_detection/change_detection.png";
import starting from "../assets/images/starting/start-ing.png";
import starting_admin from "../assets/images/starting/starting-admin.png";
import loginPage from "../assets/images/3dnote/login_page.jpg";
import projectPage from "../assets/images/3dnote/project_page.jpg";
import drawing_item from "../assets/images/3dnote/drawing_item.jpg";
import drawing_page from "../assets/images/3dnote/drawing_page.jpg";
import note_comment from "../assets/images/3dnote/note_comment.jpg";
import note_detail from "../assets/images/3dnote/note_detail.jpg";
import note_edit from "../assets/images/3dnote/note_edit.jpg";
import note_filter from "../assets/images/3dnote/note_filter.jpg";
import note_list from "../assets/images/3dnote/note_list.jpg";
import select_building from "../assets/images/3dnote/select_building.jpg";
import select_bim from "../assets/images/3dnote/select_bim.png";
import takeoff_page from "../assets/images/3dnote/takeoff_page.jpg";
import cd_data from "../assets/images/change_detection/cd-data.png";
import cd_projects from "../assets/images/change_detection/cd-projects.png";
import cd_analysis from "../assets/images/change_detection/cd-analysis.png";
import cd_resultView from "../assets/images/change_detection/cd-resultView.png";
import cd_views from "../assets/images/change_detection/cd-views.png";

export const projectData = [
  {
    id: "3d-note",
    title: "01. 3D Note (Hybrid App)",
    description:
      "모바일 디바이스에서 동작하는 위치기반 협업 툴로, SSR 기술을 통해 디바이스 성능에 구애받지 않는 3D 시각화 및 협업 기능을 제공합니다.",
    link: "https://www.notion.so/3D-Note-147b48a2365f81979bcdefeda46cd816?pvs=21",
    image: threeDNote,
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "styled-components",
      "axios",
      "zustand",
      "react-query",
      "Three.js",
      "Vitest",
      "testing-library",
      "playwright",
    ],
    features: [
      {
        title: "로그인",
        image: loginPage,
        items: ["✅ **아이디/비밀번호 로그인**", "✅ **다국어 모드 지원**"],
        skills: ["JWT", "i18n"],
        imageType: "mobile",
      },
      {
        title: "프로젝트 선택",
        image: projectPage,
        items: ["✅ **프로젝트 선택**"],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "3D 보기",
        image: threeDNote,
        items: [
          "✅ **터치 이벤트에 따라 3D 조작(이동, 줌 인/줌 아웃, 패닝)**",
          "✅ **원하는 3D 위치에 노트 생성**",
          "✅ **카메라 속도 조절**",
          "✅ **카메라 시점 초기화**",
          "✅ **카메라 방향 전환**",
          "✅ **노트 심볼 표시/숨김**",
          "✅ **페이지 전환 기능**",
          "✅ **로그아웃**",
        ],
        skills: [
          "react-three",
          "WebRTC",
          "Gesture CameraControls (Custom-built)",
        ],
        imageType: "mobile",
      },
      {
        title: "노트 리스트",
        image: note_list,
        items: ["✅ 노트 리스트 출력", "✅ 노트 검색 기능"],
        skills: ["react-query"],
        imageType: "mobile",
      },
      {
        title: "노트 필터",
        image: note_filter,
        items: [
          "✅ 분류 필터 기능",
          "✅ 기간 필터 기능",
          "✅ 보고자 필터 기능",
          "✅ 필터 적용",
          "✅ 필터 초기화",
        ],
        skills: ["react-query"],
        imageType: "mobile",
      },
      {
        title: "노트 상세보기",
        image: note_detail,
        items: [
          "✅ 노트 상세 정보 출력",
          "✅ 댓글 작성/수정/삭제 기능",
          "✅ 이미지 첨부파일 확대 보기",
          "✅ 3D 보기와 연동된 위치 이동",
          "✅ 노트 이슈 종결 처리",
          "✅ 노트 삭제",
        ],
        skills: ["react-query"],
        imageType: "mobile",
      },
      {
        title: "노트 댓글",
        image: note_comment,
        items: [
          "✅ 댓글 작성/수정/삭제 기능",
          "✅ 이미지 첨부파일 확대 보기",
          "✅ 파일 다운로드 기능",
          "✅ 3D 보기와 연동된 위치 이동",
          "✅ 노트 이슈 종결 처리",
        ],
        skills: ["rc-mentions", "react-query"],
        imageType: "mobile",
      },
      {
        title: "노트 수정",
        image: note_edit,
        items: ["✅ 노트의 각 항목 수정"],
        skills: ["react-query"],
        imageType: "mobile",
      },
      {
        title: "BIM 부재",
        image: select_bim,
        items: [
          "✅ BIM 부재 트리 출력",
          "✅ BIM 부재 선택 및 해제",
          "✅ 전체 선택 기능",
        ],
        skills: ["TreeView Component (Custom-built)"],
        imageType: "mobile",
      },
      {
        title: "동 선택",
        image: select_building,
        items: [
          "✅ 동 선택 기능",
          "✅ 동별 BIM 부재 트리 출력",
          "✅ BIM 부재 선택 및 해제",
        ],
        skills: ["TreeView Component (Custom-built)"],
        imageType: "mobile",
      },
      {
        title: "도면 리스트",
        image: drawing_page,
        items: [
          "✅ 도면 리스트 출력",
          "✅ 도면 검색 기능",
          "✅ 3D 연동 도면 하이라이팅",
        ],
        imageType: "mobile",
      },
      {
        title: "도면 보기",
        image: drawing_item,
        items: [
          "✅ 도면 보기 기능(dxf, pdf 지원)",
          "✅ 도면 뷰어 확대/축소, 이동 기능",
        ],
        skills: ["dxf-viewer", "react-pdf"],
        imageType: "mobile",
      },
      {
        title: "물량 확인",
        image: takeoff_page,
        items: [
          "✅ 검색 컬럼 선택",
          "✅ 컬럼 옵션 선택",
          "✅ 물량 리스트 출력",
          "✅ 3D 연동 이동 및 팝업",
        ],
        imageType: "mobile",
      },
    ],
  },
  {
    id: "change-detection",
    title: "02. Change Detection",
    description:
      "BIM 정보와 Point Cloud 데이터를 비교하여 시설물 변화 여부를 탐지하는 웹 기반 솔루션입니다.",
    link: "https://www.notion.so/Change-Detection-147b48a2365f813daf6dff31ace800b6?pvs=21",
    image: changeD,
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "Recoil",
      "MUI (Material UI)",
      "Styled-components",
      "Three.js",
      "camera-controls",
      "ExcelJS",
    ],
    features: [
      {
        title: "DATA",
        image: cd_data,
        items: ["✅ BIM/PCD 데이터 업로드 화면 UI 구현"],
        skills: [],
        imageType: "desktop",
      },
      {
        title: "PROJECTS",
        image: cd_projects,
        items: [
          "✅ 프로젝트 리스트 출력 및 선택",
          "✅ 새로운 프로젝트 생성 기능",
          "✅ 프로젝트 선택 시 현재 프로젝트 정보 출력",
        ],
        skills: ["zustand"],
        imageType: "desktop",
      },
      {
        title: "ANALYSIS",
        image: cd_analysis,
        items: [
          "✅ 분석 실행 및 진행률 표시",
          "✅ 분석 시간, 진행 로그, 결과 차트 실시간 표시",
        ],
        skills: [],
        imageType: "desktop",
      },
      {
        title: "VIEW",
        image: cd_views,
        items: [
          "✅ BIM + PCD 3D 데이터 출력",
          "✅ PointCloud 보기/숨기기 토글",
          "✅ 노드 더블 클릭 시 해당 부재 하이라이팅 및 확대",
          "✅ View 모달 내 이미지 저장 기능",
        ],
        skills: ["Three.js", "camera-controls"],
        imageType: "desktop",
      },
      {
        title: "RESULT VIEW",
        image: cd_resultView,
        items: [
          "✅ 분석 결과 전체 시각화",
          "✅ BIM/PCD 토글, Color/Gray 모드 전환",
          "✅ 분석된 부재 리스트 출력 및 선택 시 클리핑 포인트 표시",
          "✅ 노드 더블 클릭 또는 Viewer 내 우클릭 시 해당 위치로 이동 및 팝업",
          "✅ 3D 뷰 이미지 저장 기능",
        ],
        skills: ["Three.js", "camera-controls"],
        imageType: "desktop",
      },
      {
        title: "REPORTS",
        items: [
          "✅ 분석 결과 요약 테이블",
          "✅ BIM/PCD/Dist 체크에 따른 항목 필터링",
          "✅ 각 행 클릭 시 해당 BIM 부재 출력",
          "✅ 모달 내 이미지 저장 기능",
          "✅ 엑셀 보고서 다운로드",
        ],
        skills: ["ExcelJS"],
        imageType: "desktop",
      },
    ],
  },
  {
    id: "starting",
    title: "03. Start-ing",
    description:
      "직무경험 기반 이력서 제작 웹 서비스로, 편리한 편집과 높은 가독성을 제공합니다.",
    link: starting,
    image: starting,
  },
  {
    id: "starting-admin",
    title: "04. Starting 관리자 페이지",
    description: "이력서 제작 서비스의 관리자 전용 페이지입니다.",
    link: starting_admin,
    image: starting_admin,
  },
];
