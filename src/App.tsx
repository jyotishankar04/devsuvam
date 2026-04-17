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
import NotFoundPage from "./pages/NotFoundPage"
import { ErrorBoundary } from "./components/ErrorBoundary"
import PageTransition from "./components/PageTransition"
import ProtectedRoute from "./components/admin/ProtectedRoute"
import AdminLayout from "./pages/admin/AdminLayout"
import AdminLogin from "./pages/admin/LoginPage"
import AdminDashboard from "./pages/admin/Dashboard"
import AdminProjects from "./pages/admin/ProjectsPage"
import AdminBlogs from "./pages/admin/BlogsPage"
import GenericCrudPage from "./pages/admin/GenericCrudPage"

const App = () => {
  return (
    <div className="w-full">
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<IndexLayout ></IndexLayout>} >
          <Route path="" element={<PageTransition><Index /></PageTransition>} />
          <Route path="projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="projects/:id" element={<PageTransition><ProjectPage /></PageTransition>} />
          <Route path="about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="blogs" element={<PageTransition><BlogsPage /></PageTransition>} />
          <Route path="blogs/:slug" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
         </Route>    
        <Route path="/chat" element={<ChatLayout />} />
        <Route element={<IndexLayout />}>
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="education" element={
            <GenericCrudPage title="Education" endpoint="/api/admin/education"
              columns={[{key:"degree",label:"Degree"},{key:"institution",label:"Institution"},{key:"duration",label:"Duration"}]}
              formFields={[{key:"degree",label:"Degree",type:"text"},{key:"institution",label:"Institution",type:"text"},{key:"institutionUrl",label:"Institution URL",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"gpa",label:"GPA",type:"text"},{key:"isCurrent",label:"Current",type:"checkbox"}]}
            />
          } />
          <Route path="skills" element={
            <GenericCrudPage title="Skills" endpoint="/api/admin/skills/categories"
              columns={[{key:"name",label:"Category"},{key:"icon",label:"Icon"},{key:"sortOrder",label:"Order"}]}
              formFields={[{key:"name",label:"Category Name",type:"text"},{key:"icon",label:"Icon Name (e.g. Code, Server)",type:"text"}]}
            />
          } />
          <Route path="social" element={
            <GenericCrudPage title="Social Links" endpoint="/api/admin/social-links"
              columns={[{key:"name",label:"Platform"},{key:"url",label:"URL"},{key:"username",label:"Username"}]}
              formFields={[{key:"name",label:"Platform Name",type:"text"},{key:"url",label:"URL",type:"text"},{key:"username",label:"Username",type:"text"},{key:"icon",label:"Icon Name",type:"text"}]}
            />
          } />
        </Route>
      </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
