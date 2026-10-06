import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import "./styles/app.css";

// A page transition is skipped when the tab is hidden or the user navigates again mid-way.
// The page still changes; only the animation is dropped, so mark that expected rejection as handled.
if (typeof document.startViewTransition === "function") {
  const start = document.startViewTransition.bind(document);
  document.startViewTransition = ((update?: Parameters<typeof start>[0]) => {
    const t = start(update);
    t.ready.catch(() => {});
    t.finished.catch(() => {});
    return t;
  }) as typeof document.startViewTransition;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
