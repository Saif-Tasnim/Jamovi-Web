import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Register from "./pages/auth/Register";
import LogInPage from "./pages/auth/LogInPage";
import DashboardLayout from "./layout/DashboardLayout";
import Project from "./pages/dashboard/pages/Project";
import NewProject from "./pages/dashboard/pages/NewProject/NewProject";
import PanelLayout from "./layout/PanelLayout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<HomeLayout />} />

      <Route path="sign-in" element={<LogInPage />} />
      <Route path="sign-up" element={<Register />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="projects" element={<Project />} />
        <Route path="new-project" element={<NewProject />} />
      </Route>

      <Route path="grid-sheet" element={<PanelLayout />}>
      </Route>
    </Routes>
  </BrowserRouter>
);
