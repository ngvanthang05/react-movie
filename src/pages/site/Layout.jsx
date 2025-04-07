import { Outlet } from "react-router";
import Header from "../../components/Header";

function LayoutSite() {
  return (
    <div className="h-full bg-black text-white min-h-screen pb-10 relative">
      <Header />
      <div className="mt-[75px]">

        <Outlet />
      </div>
    </div>
  );
}

export default LayoutSite;
