import { Route, Routes } from "react-router"
import IndexLayout from "./layouts/IndexLayout"
import ChatLayout from "./layouts/ChatLayout"
import Index from "./pages/Index"
import ProjectsPage from "./pages/ProjectsPage"

const App = () => {
  return (
    <div className="w-full  h-screen">

      <Routes>
        <Route path="/" element={<IndexLayout ></IndexLayout>} >
          <Route path="" element={<Index />} />
          <Route path="projects" element={<ProjectsPage />} />
         </Route>    
        <Route path="/chat" element={<ChatLayout />} />
        <Route path="*" element={<IndexLayout />} />
      </Routes>
    </div>
  )
}

export default App