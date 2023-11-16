import React, { useContext, useState } from "react";
import loginSideImg from "../../../assets/others/authentication2.png";
import bgImg from "../../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const [error, setError] = useState(true);
  const { createUser, userUpdateProfile, logOut } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    setError(false);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        userUpdateProfile(data.name);
        const loggedUser = { name: data.name, email: data.email };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();

              logOut().then(() => {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your Registration Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/login");
              });
            }
          });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="hero-content flex-col lg:flex-row"
      >
        <div className="text-center lg:text-left">
          <img className="w-[648px]" src={loginSideImg} alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-center my-10">Register</h1>
          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Name<span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="name"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your name"
                  className="input input-bordered bg-white"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-error text-xs">Name is required</p>
              )}
              {/* Email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email<span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered bg-white"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-error text-xs">Email is required</p>
              )}
              {/* Password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password<span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  className="input input-bordered bg-white"
                />
              </div>
              {/*  Error handle for Password */}
              {errors.password?.type === "required" && (
                <p className="text-error text-xs">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-error text-xs">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-error text-xs">Password must be less than 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-error text-xs">
                  Must have one number, uppercase, lowercase & special character
                </p>
              )}
              {/* Gender field */}
              <div className="form-control">
                <label className="label">
                  <div className="label-text">Gender</div>
                </label>
                <select className="bg-white" {...register("gender")}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <p className="text-error text-center">{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-sm text-center">
                Already Registered?{" "}
                <Link className="underline" to="/login">
                  Go to Login
                </Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
