import threeDNote from "../assets/images/3dnote/3d_view.png";
import changeD from "../assets/images/change_detection/change_detection.png";
import starting from "../assets/images/starting/start-ing.png";
import sampleImage from "../assets/images/starting/starting-admin.png";
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
import starting_resume_edit from "../assets/images/starting/starting-resume-edit.png";
import starting_resume_view from "../assets/images/starting/s-resume-view.png";
import starting_main from "../assets/images/starting/s-main.png";
import starting_mypage from "../assets/images/starting/s-mypage.png";
import starting_sharing from "../assets/images/starting/starting-sharing.png";
import starting_video from "../assets/videos/starting.mp4";
import heagle from "../assets/images/etc/h-eagle.png";
import ceagle_dxf from "../assets/images/etc/dxf-viewer.png";
import threeDChat from "../assets/images/etc/3d-chat.png";

export const projectData = [
  {
    id: "3d-note",
    title: "01. 3D Note (Hybrid App)",
    description:
      "모바일 디바이스에서 동작하는 위치기반 협업 툴로, SSR 기술을 통해 디바이스 성능에 구애받지 않는 3D 시각화 및 협업 기능을 제공합니다.",
    period: "2024.08 ~",
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
        items: ["✅ 아이디/비밀번호 로그인", "✅ 다국어 모드 지원"],
        skills: ["JWT", "i18n"],
        imageType: "mobile",
      },
      {
        title: "프로젝트 선택",
        image: projectPage,
        items: ["✅ 프로젝트 선택"],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "3D 보기",
        image: threeDNote,
        items: [
          "✅ 터치 이벤트에 따라 3D 조작(이동, 줌 인/줌 아웃, 패닝)",
          "✅ 카메라 속도 조절",
          "✅ 카메라 시점 초기화",
          "✅ 카메라 방향 전환(6면)",
          "✅ 노트 심볼 표시/숨김",
          "✅ 페이지 전환 기능",
          "✅ 로그아웃",
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
        title: "노트 생성 / 수정",
        image: note_edit,
        items: [
          "✅ 원하는 3D 위치에 노트 생성",
          "✅ 노트 제목, 설명, 담당자 등 주요 정보 입력",
          "✅ 노트 정보 수정 및 이슈 상태 변경",
          "✅ 이미지, 도면, 일반 파일 업로드 지원",
          "✅ 입력값 유효성 검사를 통해 **보안 강화**",
        ],
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
    video: "https://www.youtube.com/watch?v=rcssmKCToOA",
  },
  // {
  //   id: "change-detection",
  //   title: "02. Change Detection",
  //   description:
  //     "BIM 정보와 Point Cloud 데이터를 비교하여 시설물 변화 여부를 탐지하는 웹 기반 솔루션입니다.",
  //   period: "2024.04 ~ 2024.05",
  //   link: "https://www.notion.so/Change-Detection-147b48a2365f813daf6dff31ace800b6?pvs=21",
  //   image: changeD,
  //   skills: [
  //     "React",
  //     "TypeScript",
  //     "Vite",
  //     "Zustand",
  //     "Recoil",
  //     "MUI (Material UI)",
  //     "Styled-components",
  //     "Three.js",
  //     "camera-controls",
  //     "ExcelJS",
  //   ],
  //   features: [
  //     {
  //       title: "DATA",
  //       image: cd_data,
  //       items: ["✅ BIM/PCD 데이터 업로드 화면 UI 구현"],
  //       skills: [],
  //       imageType: "desktop",
  //     },
  //     {
  //       title: "PROJECTS",
  //       image: cd_projects,
  //       items: [
  //         "✅ 프로젝트 리스트 출력 및 선택",
  //         "✅ 새로운 프로젝트 생성 기능",
  //         "✅ 프로젝트 선택 시 현재 프로젝트 정보 출력",
  //       ],
  //       skills: ["zustand"],
  //       imageType: "desktop",
  //     },
  //     {
  //       title: "ANALYSIS",
  //       image: cd_analysis,
  //       items: [
  //         "✅ 분석 실행 및 진행률 표시",
  //         "✅ 분석 시간, 진행 로그, 결과 차트 실시간 표시",
  //       ],
  //       skills: [],
  //       imageType: "desktop",
  //     },
  //     {
  //       title: "VIEW",
  //       image: cd_views,
  //       items: [
  //         "✅ BIM + PCD 3D 데이터 출력",
  //         "✅ PointCloud 보기/숨기기 토글",
  //         "✅ 노드 더블 클릭 시 해당 부재 하이라이팅 및 확대",
  //         "✅ View 모달 내 이미지 저장 기능",
  //       ],
  //       skills: ["Three.js", "camera-controls"],
  //       imageType: "desktop",
  //     },
  //     {
  //       title: "RESULT VIEW",
  //       image: cd_resultView,
  //       items: [
  //         "✅ 분석 결과 전체 시각화",
  //         "✅ BIM/PCD 토글, Color/Gray 모드 전환",
  //         "✅ 분석된 부재 리스트 출력 및 선택 시 클리핑 포인트 표시",
  //         "✅ 노드 더블 클릭 또는 Viewer 내 우클릭 시 해당 위치로 이동 및 팝업",
  //         "✅ 3D 뷰 이미지 저장 기능",
  //       ],
  //       skills: ["Three.js", "camera-controls"],
  //       imageType: "desktop",
  //     },
  //     {
  //       title: "REPORTS",
  //       items: [
  //         "✅ 분석 결과 요약 테이블 출력",
  //         "✅ BIM/PCD/Dist 체크에 따른 항목 필터링",
  //         "✅ 각 행 클릭 시 해당 BIM 부재 출력",
  //         "✅ 모달 내 이미지 저장 기능",
  //         "✅ 엑셀 보고서 다운로드",
  //       ],
  //       skills: ["ExcelJS"],
  //       imageType: "desktop",
  //     },
  //   ],
  // },
  {
    id: "starting",
    title: "02. Start-ing (Web)",
    description:
      "직무경험 기반 이력서 제작 웹 서비스로, 편리한 편집과 높은 가독성을 제공합니다.",
    period: "2022.12 ~ 2024.03",
    link: starting,
    image: starting,
    skills: [
      "Next.js",
      "TypeScript",
      "Redux-Toolkit",
      "Styled-components",
      "React Query",
      "react-hook-form",
      "Quill",
      "REST API",
      "Sentry",
      "ESLint",
      "Prettier",
    ],
    features: [
      {
        title: "메인페이지",
        image: starting_main,
        items: [
          "✅ **서비스 소개 및 랜딩페이지 제공**",
          "✅ **반응형 UI 지원**",
        ],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "이력서 편집",
        image: starting_resume_edit,
        items: [
          "✅ **경력, 학력, 프로젝트 등 섹션별 이력서 작성**",
          "✅ **항목 추가/삭제 및 순서 변경 지원**",
          "✅ **입력 시 자동 저장되는 실시간 편집 기능**",
        ],
        skills: ["react-hook-form", "Quill"],
        imageType: "desktop",
      },
      {
        title: "이력서 보기",
        image: starting_resume_view,
        items: [
          "✅ **미리보기 및 공유용 이력서 화면 제공**",
          "✅ **블라인드 보기 모드 지원**",
          "✅ **모바일 환경에 최적화된 반응형 디자인**",
        ],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "마이페이지",
        image: starting_mypage,
        items: ["✅ **개인 정보 및 설정 변경 기능**"],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "로그인",
        items: [
          "✅ **아이디/비밀번호 로그인 기능**",
          "✅ **JWT 기반 인증 처리**",
        ],

        skills: ["JWT"],
        imageType: "mobile",
      },
      {
        title: "회원가입",
        items: [
          "✅ **이메일 인증 기반 회원가입 기능**",
          "✅ **SNS(카카오) 회원가입 지원**",
          "✅ **입력값 유효성 검사 및 에러 메시지 처리**",
        ],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "아이디/비밀번호 찾기",
        items: [
          "✅ **이메일을 통한 비밀번호 재설정 기능**",
          "✅ **사용자 인증 절차 제공**",
        ],
        skills: [],
        imageType: "mobile",
      },
      {
        title: "OG 데이터 대응",
        image: starting_sharing,
        items: [
          "✅ **Next.js 마이그레이션을 통한 SSR 적용**",
          "✅ **페이지별 OG 메타태그 설정으로 공유 최적화**",
        ],
        skills: ["Next.js", "SEO"],
        imageType: "desktop",
      },
    ],
    video: starting_video,
  },
];

export const otherProjects = [
  {
    title: "문화유산 3D 시각화 솔루션(H-Eagle) 통계 웹사이트 개발",
    period: "2025.05",
    description:
      "문화유산 3D 시각화 솔루션(H-Eagle)의 사용량 데이터를 시각적으로 분석할 수 있는 관리자용 통계 대시보드 개발",
    descriptionDetail:
      "- MUI X Charts를 활용해 일간/주간/월간 단위 통계 시각화\n- useMemo를 활용해 대시보드 차트 영역의 리렌더링을 최소화하여 __성능 개선__",
    skills: ["React", "MUI X Charts", "Day.js"],
    image: sampleImage,
    isSampleImage: true,
  },
  {
    title: "문화유산 3D 시각화 솔루션(H-Eagle) 유지 보수",
    period: "2025.04",
    description:
      "문화유산 3D 시각화 솔루션(H-Eagle)의 운영 중 발견된 오류를 수정하고, 사용자 피드백을 반영해 기능 개선 작업 수행",
    descriptionDetail:
      "- 사용자 요청 기반 UI 편의성 개선 (레이어 토글 기능 등)",
    skills: ["React", "Recoil", "React Query"],
    image: heagle,
  },
  {
    title: "3D Note Admin",
    period: "2025.01 ~ 2025.03",
    description:
      "3D Note 프로젝트용 관리자 페이지 개발 (데이터 관리, 사용자 승인 등)",
    descriptionDetail:
      "- 유저/노트/데이터 일괄 관리 기능 개발\n- API 응답 기반 테이블 필터/정렬 구현",
    skills: ["React", "Zustand", "MUI"],
    image: sampleImage,
    isSampleImage: true,
  },
  {
    title: "C-Eagle 도면 뷰어 기능 추가",
    period: "2024.07",
    description: "도면 뷰어 기능 추가 (DXF 파일 확대/이동/회전 기능)",
    descriptionDetail:
      "- 기존 PDF 뷰어 대비 DXF 전환으로 로딩 속도 개선\n- Canvas 기반 마우스 이동/휠 줌 기능 구현",
    skills: ["React"],
    image: ceagle_dxf,
  },
  {
    title: "3D Chat - Electron 기반 3D 협업 데스크탑 앱",
    period: "2024.06 ~ 2024.07",
    description:
      "3D 모델 파일(GLTF, FBX, IFC 등)을 채팅으로 공유하고, 즉시 데스크탑 뷰어에서 시각화할 수 있는 협업 도구 프로토타입 개발.",
    descriptionDetail:
      "- 다양한 3D 포맷(GLB, FBX, OBJ, IFC 등)의 업로드 및 실시간 미리보기\n" +
      "- 채팅 내 모델 공유와 뷰어 동기화를 위한 사용자 인터페이스 설계\n" +
      "- Viewpoint 저장 및 복원 기능 구현 (React Three Fiber 기반)\n",
    skills: [
      "Electron",
      "React",
      "Three.js",
      "WebRTC",
      "Formik",
      "MUI",
      "Styled-components",
    ],
    image: threeDChat,
  },
  {
    title: "Change Detection (BIM/PCD 분석 솔루션)",
    period: "2024.04 ~ 2024.05",
    description:
      "BIM과 Point Cloud 데이터를 비교 분석하는 건축 솔루션 UI 개발 참여.",
    descriptionDetail:
      "- BIM과 PCD 데이터를 업로드하고 비교 분석하는 전체 UI/UX 흐름 설계 및 구현\n" +
      "- 프로젝트 생성, 데이터 관리 결과 리포트(Excel) 출력 기능 구현\n" +
      "- 3D Viewer에서 분석 결과 모델 하이라이팅, 시점 이동, 이미지 저장 기능 구현\n" +
      "- Tree 뷰 탐색, 상세 모달, Admin 전용 기능 포함",
    skills: [
      "React",
      "TypeScript",
      "Three.js",
      "Zustand",
      "MUI",
      "ExcelJS",
      "camera-controls",
    ],
    image: cd_resultView,
    video: "https://www.youtube.com/watch?v=AjECx0wG_FA",
  },
  {
    title: "Start-ing 관리자 페이지",
    period: "2023.06 ~ 2023.07",
    description:
      "이력서 서비스 관리 기능 개발 (권한 관리, 유저 검색, 이력서 검수 등)",
    descriptionDetail:
      "- 사용자 관리, 결제 내역, 팀/참가자 관리 등 주요 기능 구현\n" +
      "- 권한별 사용자 구분, 임시 계정 관리, 통합 결제 및 환불 내역 관리 기능 개발\n" +
      "- MUI 기반 테이블 UI와 검색/필터 기능, 페이지네이션 등 공통 유틸 훅 적용\n" +
      "- 관리자 변경 이력 기록, 리포트 다운로드 등 운영 편의 기능 추가\n" +
      "- Dev / Main 브랜치 자동 배포 연동 및 코드 스타일/커밋 컨벤션 정립",
    skills: ["React", "TypeScript", "Styled-components", "React Query", "MUI"],
    image: sampleImage,
    isSampleImage: true,
  },
];
