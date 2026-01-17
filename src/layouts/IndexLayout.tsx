import Footer from "@/components/custom/Footer";
import NavBar from "@/components/custom/NavBar";
import { Outlet } from "react-router";

const IndexLayout = () => {
  return (
    <div className="max-w-5xl w-full h-full mx-auto flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default IndexLayout;
