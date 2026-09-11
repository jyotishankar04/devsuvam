import { lazy } from "react"
import { Route, Routes } from "react-router"
import IndexLayout from "./layouts/IndexLayout"
import Index from "./pages/Index"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import ExperiencePage from "./pages/ExperiencePage"
import BlogsPage from "./pages/BlogsPage"
import SetupPage from "./pages/SetupPage"
import NotFoundPage from "./pages/NotFoundPage"
import { ErrorBoundary } from "./components/ErrorBoundary"

// The markdown renderer is heavy, so the project detail page loads on demand.
const ProjectPage = lazy(() => import("./pages/ProjectPage"))

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route index element={<Index />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="setup" element={<SetupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App
