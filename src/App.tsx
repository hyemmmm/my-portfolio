import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/project/:id", element: <ProjectDetail /> }, // 동적 라우팅
]);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
