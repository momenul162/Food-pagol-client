import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../config/baseURL";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_image_apiKey;

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item.image);

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0] ? data.image[0] : item.image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          let img = resData.data.display_url;
          const { name, price, category, recipe } = data;
          const updateItem = { name, price: parseFloat(price), category, recipe, image: img };

          baseUrl.put(`menu/${item._id}`, updateItem).then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Item Update Successfully",
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
      <SectionTitle mainHeader="Update An Item"></SectionTitle>
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
            defaultValue={item?.name}
            placeholder="recipe name"
            {...register("name", { maxLength: 150 })}
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
              {...register("category", { defaultValue: item?.category })}
            >
              <option disabled value="Select one">
                Select one
              </option>
              <option value="Pizza">Pizza</option>
              <option value="Desserts">Desserts</option>
              <option value="Deshi">Deshi</option>
              <option value="Salad">Salad</option>
              <option value="Soups">Soups</option>
              <option value="Drinks">Drinks</option>
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
              defaultValue={item?.price}
              placeholder="price?"
              {...register("price", { maxLength: 50 })}
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
            {...register("image")}
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
            defaultValue={item?.recipe}
            placeholder="Recipe details..."
            {...register("recipe", { maxLength: 200 })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-outline w-full border-1 border-b-4 input-primary mt-8"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
