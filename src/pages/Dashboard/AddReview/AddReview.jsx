import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { baseUrl } from "../../../config/baseURL";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const AddReview = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const payment = useLoaderData();
  console.log(payment);

  const onSubmit = (data) => {
    const newReview = { name: user?.displayName, details: data.details, rating };

    baseUrl.post(`reviews?email=${user?.email}`, newReview).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thank you for your review",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="min-w-full px-20">
      <SectionTitle mainHeader="your review"></SectionTitle>
      <Rating
        initialRating={rating}
        value={rating}
        onChange={handleRating}
        className="mx-auto my-10"
        style={{ maxWidth: 180 }}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
      />
      <p></p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Which recipe you liked most?<span className="text-error">*</span>
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="type recipe name you like most"
            {...register("recipe", { required: true, maxLength: 150 })}
            className="input input-bordered input-primary bg-white"
          />
        </div>

        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">
              Review details<span className="text-error">*</span>
            </span>
          </label>
          <textarea
            className="textarea input-primary bg-white w-full h-[200px]"
            placeholder="Review details . . ."
            {...register("details", { required: true })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-outline w-full border-1 border-b-4 input-primary mt-8"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
