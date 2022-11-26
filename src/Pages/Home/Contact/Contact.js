import React from "react";

const Contact = () => {
  return (
    <section className="p-6 dark:text-gray-100">
      <form
        novalidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
        <div>
          <label for="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="input input-bordered w-full"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label for="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="input input-bordered w-full"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
