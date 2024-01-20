import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset();
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl p-8 rounded-lg mt-10 bg-slate-200">
      <h1 className="text-3xl font-semibold text-center uppercase">Contact us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email", { required: true, maxLength: 50 })}
            className="input input-bordered input-primary bg-white"
          />
        </div>

        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea input-primary bg-white"
            placeholder="Please type your message . . ."
            {...register("message", { required: true })}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-outline border-1 border-b-4 input-primary mt-8">
          Contact
        </button>
      </form>
    </div>
  );
};

export default Contact;
