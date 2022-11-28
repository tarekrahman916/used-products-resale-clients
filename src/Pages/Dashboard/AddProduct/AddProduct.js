import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const date = new Date();
  const postDate = format(date, "PP");
  const navigate = useNavigate();

  const { data: productSeller = {} } = useQuery({
    queryKey: ["productSeller", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://used-products-resale-server-nine.vercel.app/users/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

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

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_img_key}`;

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
            price: data.salePrice,
            originalPrice: data.originalPrice,
            condition: data.condition,
            useYears: data.useYears,
            seller: user?.displayName,
            email: user?.email,
            phone: data.phone,
            location: data.location,
            sellerStatus: "unverified",
            postDate: postDate,
            description: data.description,
          };

          console.log(product);

          fetch(
            "https://used-products-resale-server-nine.vercel.app/products",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem(
                  "laptopStoreToken"
                )}`,
              },
              body: JSON.stringify(product),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                navigate("/dashboard/seller/myproducts");
                toast.success("Product added successfully");
              }
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
                required
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
                required
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
                required
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
                required
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
                required
                type="text"
                placeholder="Original Price here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Condition</span>
              </label>
              <select
                {...register("condition", { required: true })}
                required
                className="select select-bordered w-full "
              >
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Years of use</span>
              </label>
              <input
                {...register("useYears", { required: true })}
                required
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
                required
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
                required
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
              required
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
