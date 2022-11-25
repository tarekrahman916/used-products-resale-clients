import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const date = new Date();
  const postDate = format(date, "PP");
  console.log(postDate);
  const hostKey = process.env.REACT_APP_img_key;

  console.log(hostKey);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const categories = useLoaderData();

  const handleAddProduct = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=03f6bb752eaa1e452bf3bc045bed77e3`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);

        if (imgData.success) {
          const product = {
            name: data.name,
            image: imgData.data.url,
            categoryId: data.categoryId,
            salePrice: data.salePrice,
            originalPrice: data.originalPrice,
            useYears: data.useYears,
            seller: user?.displayName,
            phone: data.phone,
            location: data.location,
            postDate: postDate,
          };

          console.log(product);

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "laptopStoreToken"
              )}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("success");
            });
        }
      });
  };

  return (
    <div className=" mx-auto">
      <h2 className="text-center text-3xl font-bold my-5">Add Product</h2>
      <div>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="bg-neutral p-10 rounded-2xl "
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Product Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full text-dark"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Product Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Categories</span>
              </label>
              <select
                {...register("categoryId", { required: true })}
                className="select select-bordered w-full "
              >
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Sale Price</span>
              </label>
              <input
                {...register("salePrice", { required: true })}
                type="text"
                placeholder="Sale Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Original Price</span>
              </label>
              <input
                {...register("originalPrice", { required: true })}
                type="text"
                placeholder="Original Price here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Years of use</span>
              </label>
              <input
                {...register("useYears", { required: true })}
                type="text"
                placeholder="Years of use"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Phone Number</span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Location</span>
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="Location"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full mb-5"
              placeholder="Description"
            ></textarea>
            <button className="btn btn-secondary w-full" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
