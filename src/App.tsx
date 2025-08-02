import { Route, Routes } from "react-router-dom"
import IndexLayout from "./layouts/IndexLayout"
import ProjectsPage from "./pages/ProjectsPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import OtherLayout from "./layouts/OtherLayout"
import AboutPage from "./pages/AboutPage"
import ExperiencePage from "./pages/ExperiencePage"
import SkillsPage from "./pages/SkillsPage"

const App = () => {
  return (
    <div className="w-full h-screen bg-background">
      <Routes>
        <Route path="/" element={<IndexLayout />} />
        <Route path="/projects" element={<OtherLayout children={<ProjectsPage />} />} />
        <Route path="/projects/:id" element={<OtherLayout children={<ProjectDetailsPage />} />} />
        <Route path="/about" element={<OtherLayout children={<AboutPage/> } />} />
        <Route path="/experience" element={<OtherLayout children={<ExperiencePage /> } />} />
        <Route path="/skills" element={<OtherLayout children={<SkillsPage />} />} />
        <Route path="*" element={<IndexLayout />} />
      </Routes>
    </div>
  )
}

export default App