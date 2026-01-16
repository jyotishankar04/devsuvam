import { Route, Routes } from "react-router"
import IndexLayout from "./layouts/IndexLayout"
import ChatLayout from "./layouts/ChatLayout"
import Index from "./pages/Index"

const App = () => {
  return (
    <div className="w-full  h-screen bg-background">

      <Routes>
        <Route path="/" element={<IndexLayout ></IndexLayout>} >
          <Route path="/" element={<Index />} />
         </Route>    
        <Route path="/chat" element={<ChatLayout />} />
        <Route path="*" element={<IndexLayout />} />
      </Routes>
    </div>
  )
}

export default App