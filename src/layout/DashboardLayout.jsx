import { Outlet } from "react-router";
import SideBar from "../pages/dashboard/SideBar";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-x-hidden">
            <SideBar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;