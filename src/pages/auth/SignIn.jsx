import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const SignIn = () => {
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

    try {
      console.log(data);
      //  api for login credential

      // if user successfully logged in, then redirect will following routes

        navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error?.message);
      console.log(errorMessage);
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
          className="p-3 w-full block my-7 border border-purple-500 rounded-md outline-0"
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

        {/* password */}
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 50,
          })}
          placeholder="Enter password"
          className="p-3 w-full block my-7 border border-purple-500 rounded-md outline-0"
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

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            disabled={isSubmitted}
            className="px-3 py-2 bg-blue-600 rounded-md text-gray-200 hover:bg-gray-200 hover:text-black transition-all duration-300"
          >
            SignIn
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
