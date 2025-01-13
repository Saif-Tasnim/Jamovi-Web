import { useNavigate } from "react-router";

const Project = () => {
  const navigate = useNavigate();
  // fetch all projects data from backend
  const allProjects = [];

  return (
    <div className="w-full">
      <div className="flex items-center mx-10 my-6">
        <h1 className="text-xl font-semibold text-gray-700">All Projects</h1>
        {allProjects.length !== 0 ? <button>New Project</button> : ""}
      </div>

      <hr className="w-full" />

      {allProjects.length > 0 ? (
        // iterate all projects in card format
        ""
      ) : (
        <div className="h-full flex justify-center items-center">
          <button
            className="px-4 py-2 bg-blue-600 rounded-md text-gray-200"
            onClick={() => navigate("/dashboard/new-project")}
          >
            Add new Project
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
