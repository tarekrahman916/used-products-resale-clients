import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-primary text-center my-6">
        All Blogs
      </h2>
      <div>
        <div className="bg-gray-200 p-10 shadow-lg mb-6">
          <h3 className="text-3xl font-semibold mb-4">
            (1) What are the different ways to manage a state in a React
            application?
          </h3>
          <h4 className="text-xl font-semibold">
            In React apps, there are four main types of state to handle the
            state.
          </h4>
          <ul class="list-disc list-inside mt-3">
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
        </div>
        <div className="bg-gray-200 p-10 shadow-lg mb-6">
          <h3 className="text-3xl font-semibold mb-4">
            (2) How does prototypical inheritance work?
          </h3>
          <p className="font-semibold">
            Prototypal Inheritance is that an object can point to another object
            and inherit all its properties. The main purpose is to allow
            multiple instances of an object to share common properties, hence,
            the Singleton Pattern.
          </p>
        </div>
        <div className="bg-gray-200 p-10 shadow-lg mb-6">
          <h3 className="text-3xl font-semibold mb-4">
            (3) What is a unit test? Why should we write unit tests?
          </h3>
          <p className="font-semibold">
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected.
          </p>
          <ul class="list-disc list-inside mt-3">
            <li>
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions.
            </li>
            <li>It simplifies the debugging process.</li>
            <li>
              Unit testing is an integral part of extreme programming. Extreme
              programming is basically a
              “test-everything-that-can-possibly-break” programming strategy.
            </li>
            <li>
              Unit testing improves code coverage. A debatable topic is to have
              100% code coverage across your application.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 p-10 shadow-lg mb-6">
        <h3 className="text-3xl font-semibold mb-4">
          (4) React vs. Angular vs. Vue?
        </h3>
        <p className="font-semibold">
          <strong className="text-xl font-bold">React:</strong> Testing is a
          type of software testing where individual units or components of a
          software are tested. The purpose is to validate that each unit of the
          software code performs as expected.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
