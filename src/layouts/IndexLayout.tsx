import NavBar from "@/components/custom/NavBar";
import { Outlet } from "react-router";

const IndexLayout = () => {
  return (
    <div className="max-w-5xl w-full h-full mx-auto flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default IndexLayout;
