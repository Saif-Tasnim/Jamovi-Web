import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function CreateProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitted(true);
    setErrorMessage("");

    setTimeout(() => {
      alert("Project Successfully Uploaded");
      navigate("/grid-sheet");
    }, 2000);

    // FormData object
    const formData = new FormData();
    formData.append("project_title", data.project_title);
    formData.append("project_description", data.project_description);
    formData.append("project_file", data.project_file[0]);
    try {
      const response = await fetch("http://127.0.0.1:8000/project_create", {
        method: "POST",
        headers: {
          //when the form includes files, it is encoded as multipart/form-data
          "Content-type": "application/multipart/form-data",
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to connect with backend");
      }

      const result = await response.json();
      console.log("Project created Successfully", result);
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error:", errorMessage);
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="w-2/3">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Project Title */}
        <div className="flex gap-10 items-center">
          <div>
            <input
              type="text"
              {...register("project_title", { required: true, maxLength: 255 })}
              placeholder="e.g. Market Analysis"
              className="p-3 w-full block my-2 border border-purple-500 rounded-md outline-0"
              aria-invalid={errors.project_title ? "true" : "false"}
            />
            {errors.project_title?.type === "required" && (
              <p role="alert" className="text-red-500 pl-4 font-medium">
                Title is required
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("project_info", { required: true, maxLength: 255 })}
              placeholder=""
              className="p-3 w-full block my-2 border border-purple-500 rounded-md outline-0"
              aria-invalid={errors.project_info ? "true" : "false"}
            />
            {errors.project_info?.type === "required" && (
              <p role="alert" className="text-red-500 pl-4 font-medium">
                Project Info is required
              </p>
            )}
          </div>
        </div>

        <br />

        {/* Project Description */}
        <textarea
          {...register("project_description", { maxLength: 255 })}
          placeholder="e.g. Market Analysis with this dataset"
          className="p-3 h-20 w-full block my-2 border border-purple-500 rounded-md outline-0"
          aria-invalid={errors.project_description ? "true" : "false"}
        />
        {errors.project_description?.type === "maxLength" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Description must not exceed 255 characters
          </p>
        )}

        <br />

        {/* Project File */}
        <input
          type="file"
          accept=".csv,.xlsx"
          {...register("project_file", {
            required: true,
            validate: (value) =>
              value[0]?.name.endsWith(".csv") ||
              value[0]?.name.endsWith(".xlsx"),
          })}
          placeholder="Upload .csv files"
          className="p-3 w-1/3 mx-auto block my-2 border border-purple-500 rounded-md outline-0 cursor-pointer"
          aria-invalid={errors.project_file ? "true" : "false"}
        />
        {errors.project_file?.type === "required" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Project file is required
          </p>
        )}
        {errors.project_file?.type === "validate" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Only .csv and .xlsx files allowed
          </p>
        )}

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={isSubmitted}
            className="px-3 py-2 bg-blue-600 rounded-md text-gray-200 hover:bg-gray-200 hover:text-black transition-all duration-300"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
