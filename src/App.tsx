import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout이 라우트 래핑
    children: [
      { path: "", element: <Home /> },
      { path: "project/:id", element: <ProjectDetail /> },
    ],
  },
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
