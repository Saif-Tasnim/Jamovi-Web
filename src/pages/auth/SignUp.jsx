import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Signup() {
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

    // Create FormData object for form-encoded submission
    const formData = new URLSearchParams();
    formData.append("user_email", data.user_email);
    formData.append("password", data.password);
    formData.append("user_name", data.user_name);

    try {
      // Correct url for the backend
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          // Correct header for form data
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // Convert to URL-encoded string
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to backend");
      }

      const result = await response.json();
      setIsSubmitted(true);
      console.log("Signup successful!", result);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error:", errorMessage);
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* user email */}
        <input
          {...register("user_email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          placeholder="Enter your email address"
          className="p-3 w-full block my-1 border border-purple-500 rounded-md outline-0"
          aria-invalid={errors.user_email ? "true" : "false"}
        />
        {errors.user_email?.type === "required" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Email is required
          </p>
        )}
        {errors.user_email?.type === "pattern" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Give a valid email address
          </p>
        )}

        <br />
        {/* password */}
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 50,
          })}
          placeholder="Enter password"
          className="p-3 w-full block my-1 border border-purple-500 rounded-md outline-0"
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Password is required
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Password must be at least 8 characters
          </p>
        )}
        {errors.password?.type === "maxLength" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Password must not exceed 50 characters
          </p>
        )}
        <br />

        {/* user name */}
        <input
          {...register("user_name", { required: true })}
          placeholder="Enter your full name"
          className="p-3 w-full block my-1 border border-purple-500 rounded-md outline-0"
          aria-invalid={errors.user_email ? "true" : "false"}
        />
        {errors.user_email?.type === "required" && (
          <p role="alert" className="text-red-500 pl-4 font-medium">
            Full name is required
          </p>
        )}

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            disabled={isSubmitted}
            className="px-3 py-2 bg-blue-600 rounded-md text-gray-200 hover:bg-gray-200 hover:text-black transition-all duration-300"
          >
            Signup
          </button>
        </div>
      </form>
    </>
  );
}
