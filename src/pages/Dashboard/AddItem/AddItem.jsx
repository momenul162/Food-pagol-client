import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { baseUrl } from "../../../config/baseURL";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_image_apiKey;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.success) {
          const imgURL = responseData.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };

          baseUrl.post("menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Item Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="min-w-full px-20">
      <SectionTitle mainHeader="Add An Item"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Recipe name<span className="text-error">*</span>
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="recipe name"
            {...register("name", { required: true, maxLength: 150 })}
            className="input input-bordered input-primary bg-white"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Category<span className="text-error">*</span>
              </span>
            </label>
            <select
              className="select input-primary bg-white"
              defaultValue="Select One"
              {...register("category", { required: true })}
            >
              <option disabled value="Select One">
                Select one
              </option>
              <option value="pizza">Pizza</option>
              <option value="desserts">Desserts</option>
              <option value="deshi">Deshi</option>
              <option value="salad">Salad</option>
              <option value="soups">Soups</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Price<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price?"
              {...register("price", { required: true, maxLength: 50 })}
              className="input input-bordered input-primary bg-white"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Image<span className="text-error">*</span>
            </span>
          </label>
          <input
            type="file"
            name="image"
            {...register("image", { required: true, maxLength: 50 })}
            className="input input-bordered input-primary p-2 bg-white"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">
              Recipe details<span className="text-error">*</span>
            </span>
          </label>
          <textarea
            className="textarea input-primary bg-white w-full h-[200px]"
            placeholder="Recipe details..."
            {...register("recipe", { required: true, maxLength: 200 })}
          ></textarea>
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

export default AddItem;
