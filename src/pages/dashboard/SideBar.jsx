import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-blue-400 bg-fixed">
      <h1 className="text-xl px-6 py-12 font-medium">JAMOVI WEB Version</h1>

      <div className="flex flex-col gap-6 pl-11 mt-11">
        <Link to="/dashboard/projects">Projects</Link>
        <Link to="/dashboard">Work Flows</Link>
        <Link to="/dashboard">Monitoring</Link>
        <Link to="/dashboard">Deployments</Link>
        <Link to="/dashboard">Notifications</Link>
        <Link to="/dashboard">Settings</Link>
      </div>
    </div>
  );
};

export default SideBar;
