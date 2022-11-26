import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {
  const { user } = useContext(authContext);
  const { name, price, image, _id } = selectedProduct;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      productName,
      price,
      image,
      name,
      email,
      phone,
      location,
      productId: _id,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("The Product is booked.");
          setSelectedProduct("");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form
              onSubmit={handleBooking}
              className="my-5 border-2 p-3 rounded-lg"
            >
              <div className="form-control w-full ">
                <label className="label">Product</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Type here"
                  value={name}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Type here"
                  value={price}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  value={user?.displayName}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Type here"
                  value={user?.email}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full "
                />
              </div>
              <button className="btn btn-primary w-full mt-5" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
