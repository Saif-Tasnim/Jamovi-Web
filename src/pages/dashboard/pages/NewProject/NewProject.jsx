import CreateProject from "./CreateProject";

const NewProject = () => {
  return (
    <div className="w-full">
      <h1 className="ml-80 text-xl font-semibold text-gray-700 pt-8 pb-4">
        Create New Project
      </h1>

      <hr />

      <div className="my-12 flex flex-col justify-start items-start gap-7 ml-80">
        <CreateProject />
      </div>
    </div>
  );
};

export default NewProject;
