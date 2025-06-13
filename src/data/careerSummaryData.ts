export const careerSummaryData = [
  {
    id: "3d-note",
    title: "3D Note (하이브리드 앱) 신규 개발 및 유지 보수",
    period: "2024년 8월 – 2025년 4월 (9개월)",
    achievement:
      "기존 카메라 컨트롤의 한계를 극복하기 위해 커스텀 카메라 컨트롤을 직접 구현하여 조작 편의성을 향상",
    roles: [
      {
        id: "custom-camera",
        text: "웹/모바일 환경 모두에서 커스터마이징 가능한 카메라 컨트롤 구현으로 기존 라이브러리의 제약 극복",
      },
      {
        id: "test-env",
        text: "Vitest + Playwright 기반 테스트 환경을 구성하고 주요 유틸리티 및 시나리오 커버리지 70% 이상 확보",
      },
      {
        id: "webrtc-api",
        text: "복잡한 WebRTC 실시간 통신 구조를 추상화하여 유지보수성을 높이고, 3D Renderer 서버와의 통신을 API 호출처럼 단순화",
      },
      {
        id: "treeview",
        text: "트리 구조 데이터를 기반으로 TreeView 컴포넌트를 직접 구현하여 UI 요구사항에 최적화",
        popup: false,
      },
      {
        id: "admin-config",
        text: "설정 파일 및 환경 변수를 통합 관리하는 프로젝트 전용 어드민 페이지 구축으로 반복 작업 최소화",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "React Three Fiber (Three.js)",
      "Zustand",
      "styled-components",
      "Vite",
      "React Query",
      "Jenkins",
    ],
  },
  {
    id: "start-ing",
    title: "Start-ing (채용 웹 플랫폼) 신규 개발 및 유지 보수",
    period: "2022년 12월 – 2024년 3월 (1년 4개월)",
    achievement:
      "TypeScript 도입과 공통 컴포넌트화를 통해 코드 품질과 생산성을 개선하고, 각 기능을 기한 내 완료하여 릴리스 일정 100% 준수",
    roles: [
      {
        id: "ts-migration",
        text: "기존 프로젝트를 TypeScript로 마이그레이션하여 런타임 안정성과 유지보수성 향상",
      },
      {
        id: "shared-components",
        text: "반복 UI를 공통 컴포넌트화하여 개발 효율성 증가 및 릴리스 일정 100% 준수",
      },
      {
        id: "og-ssr",
        text: "Next.js 기반 SSR 환경 구축 및 OG 태그 동적 처리로 공유 최적화",
        link: "/project/start-ing#og-meta",
      },
      {
        id: "admin-pages",
        text: "10페이지 이상의 관리자 화면을 설계하고, Zustand를 기반으로 상태 및 비동기 요청 구조 설계",
      },
      {
        id: "autosave",
        text: "Blur 이벤트 기반 자동 저장 기능을 통해 UX 개선 및 입력 데이터 수집률 향상",
      },
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "styled-components",
      "Redux Toolkit",
      "AWS Amplify",
    ],
  },
];
