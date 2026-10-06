import { Routes, Route, Navigate } from "react-router-dom";
import PortfolioLayout from "./layouts/PortfolioLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
