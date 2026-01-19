import Footer from "@/components/custom/Footer";
import NavBar from "@/components/custom/NavBar";
import { Outlet } from "react-router";

const IndexLayout = () => {
  return (
    <div className="max-w-5xl w-full h-full mx-auto flex  flex-col">
      <NavBar />
      <div className="px-4 md:px-0 ">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default IndexLayout;
