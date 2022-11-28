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
          <strong className="text-xl font-bold">React Js:</strong>
          This open-source Javascript library has become quite the rage for
          developing interactive web and mobile apps since Facebook launched it
          in 2013. There are primarily three reasons which have made the React
          library a developer darling - Code Reusability- it allows developers
          to reuse blocks of code for a simple function Ease-of-use - React,
          though tougher than Vue, has a less steep learning curve than Angular
          JS. Customizable - The crucial difference between the library and
          framework is about control. This is where React is ahead of Angular-
          it is highly customizable. You are in control and you incorporate the
          parts of the library you need, unlike Angular, which does not allow
          much modification.
        </p>
        <p className="font-semibold my-5">
          <strong className="text-xl font-bold">Angular:</strong>
          AngularJS was developed in 2009 by Google. The first version was
          Angular.JS. Angular is currently known as a JavaScript framework.
          Obviously, all significant Google projects have been developed with
          Angular. Angular.js is an MVC framework. A major disadvantage of
          Angular is that it uses a regular DOM, and thus, the entire tree
          structure of the HTML tags is updated, which massively impacts the
          loading time. Angular.js has its Ionic framework for mobile
          applications.
        </p>
        <p className="font-semibold">
          <strong className="text-xl font-bold">Vue Js:</strong>
          Vue.js is a JavaScript-based progressive framework for creating
          single-page applications. It was created with scalability and
          incrementality in mind, as well as ease of integration with other view
          layer frameworks. Vue is built from the bottom up to be progressively
          adaptable, unlike other monolithic frameworks. The core library
          focuses solely on the view layer, and it’s simple to use and connect
          with other libraries or applications. This framework’s fast learning
          angle is almost a trademark. It’s a flexible framework that may be
          used as a library or a full-fledged framework for developing large web
          applications.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
