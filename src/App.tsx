import { createBrowserRouter, Navigate } from "react-router-dom";
import PortfolioLayout from "./layouts/PortfolioLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// A data router: needed for <Link viewTransition> page transitions.
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PortfolioLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "resume", element: <Resume /> },
      ],
    },
    { path: "/home", element: <Navigate to="/" replace /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ],
  { basename: "/resume-portfolio" }
);
