// App.tsx
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./styles/GlobalStyles";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="project/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
