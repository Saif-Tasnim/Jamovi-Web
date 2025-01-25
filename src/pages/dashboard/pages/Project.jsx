import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjetcs] = useState([]);

  const allProjects = [
    {
      title: "ABC",
      type: "DEF",
      description: "avshdjjskjaskjdkjhsdihfoihkshdfihsfkhlkhdslfjosjlfj",
    },
    {
      title: "ABC",
      type: "DEF",
      description: "avshdjjskjaskjdkjhsdihfoihkshdfihsfkhlkhdslfjosjlfj",
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-hidden">
      <div className="flex justify-between items-center ml-80 py-8">
        <h1 className="text-xl font-semibold text-gray-700">All Projects</h1>
        {allProjects.length !== 0 ? (
          <button
            className="p-2 rounded-xl border border-blue-500 text-blue font-medium hover:bg-blue-500 hover:text-gray-200 mr-9"
            onClick={() => navigate("/dashboard/new-project")}
          >
            <p className="flex gap-1 items-center">
              {" "}
              <BiPlus className="w-5 h-5" /> New Project
            </p>{" "}
          </button>
        ) : (
          ""
        )}
      </div>

      <hr className="w-full" />

      {allProjects.length > 0 ? (
        <div className="ml-[300px] grid grid-cols-2 gap-7 my-12 mr-8">
          {allProjects.map((project, index) => (
            <div className="relative" key={index}>
              <div className="p-5 bg-gray-300 rounded-xl flex flex-col gap-8 border border-gray-700 shadow-xl text-sm">
                <h1 className="text-xl font-semibold">
                  {" "}
                  Project Name: {project.title}
                </h1>

                <p className="text-base"> Project Type: {project.type} </p>

                <p className="text-justify mr-9">{project.description}</p>
              </div>
              <div className="absolute top-1 right-2">
                <button
                  className="px-2 py-1 rounded-lg bg-blue-500 text-gray-200 text-sm"
                  onClick={() => navigate("/grid-sheet")}
                >
                  Open Project
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
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
