import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    mode: "light", // 또는 "dark"
    primary: {
      main: "#60A5FA", // 포인트 컬러
    },
    background: {
      default: "#1E293B", // 배경색 (body, Box 등)
      paper: "#F8FAFC", // Card, Container 등의 내부
    },
    text: {
      primary: "#F8FAFC", // 텍스트 기본색
    },
  },
});

export default customTheme;
