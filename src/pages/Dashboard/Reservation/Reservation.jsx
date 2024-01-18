import React from "react";
import { useForm } from "react-hook-form";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="mx-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Date<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="date"
              name="date"
              {...register("date", { required: true, maxLength: 150 })}
              className="input input-bordered input-primary bg-white"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Time<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="time"
              name="time"
              {...register("time", { required: true, maxLength: 150 })}
              className="input input-bordered input-primary bg-white"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Name<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="your name"
              {...register("name", { required: true, maxLength: 150 })}
              className="input input-bordered input-primary bg-white"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Phone<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="11 digit phone number"
              {...register("number", {
                required: true,
                maxLength: 11,
              })}
              className="input input-bordered input-primary bg-white"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Guest<span className="text-error">*</span>
              </span>
            </label>
            <select
              className="select input-primary bg-white"
              defaultValue="Select One"
              {...register("guest", { required: true })}
            >
              <option disabled value="Select One">
                Select one
              </option>
              <option value="one">1 Person</option>
              <option value="two">2 Person</option>
              <option value="three">3 Person</option>
              <option value="four">4 Person</option>
              <option value="five">5 Person</option>
              <option value="family">Family</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Email<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email?"
              {...register("email", { required: false, maxLength: 50 })}
              className="input input-bordered input-primary bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline w-full border-1 border-b-4 input-primary mt-8"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Reservation;
