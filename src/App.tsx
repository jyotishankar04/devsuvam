import { Route, Routes } from "react-router"
import IndexLayout from "./layouts/IndexLayout"
import ChatLayout from "./layouts/ChatLayout"
import Index from "./pages/Index"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectPage from "./pages/ProjectPage"
import BlogPage from "./pages/BlogPage"
import BlogsPage from "./pages/BlogsPage"

const App = () => {
  return (
    <div className="w-full">

      <Routes>
        <Route path="/" element={<IndexLayout ></IndexLayout>} >
          <Route path="" element={<Index />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:slug" element={<BlogPage />} />
          <Route path="experience" element={<ExperiencePage />} />
         </Route>    
        <Route path="/chat" element={<ChatLayout />} />
        <Route path="*" element={<IndexLayout />} />
      </Routes>
    </div>
  )
}

export default App