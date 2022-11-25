import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {
  const { user } = useContext(authContext);
  const { name, price } = selectedProduct;

  const handleBooking = (e) => {
    e.preventDefault();
    setSelectedProduct("");
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
            <form className="my-5 border-2 p-3 rounded-lg">
              <div className="form-control w-full ">
                <label className="label">Product</label>
                <input
                  type="text"
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
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered w-full "
                />
              </div>
              <button
                onClick={handleBooking}
                className="btn btn-primary w-full mt-5"
                type="submit"
              >
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
