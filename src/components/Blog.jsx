import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-xl font-semibold">
        Tell us the differences between uncontrolled and controlled components ?
      </h1>
      <hr className="mt-3 mb-5"></hr>
      <h2 className="text-lg mb-3 font-semibold">Controlled Components:</h2>
      <ol className="text-lg">
        <li>The state of the form elements is controlled by React.</li>
        <li>
          The component's state is used to track and update the values of form
          elements.
        </li>
        <li>
          Changes to the form elements are handled through React event handlers.
        </li>
        <li>
          The state is considered immutable, and modifications are done using
          setState.
        </li>
      </ol>

      <h2 className="text-lg my-3 font-semibold">Uncontrolled Components:</h2>
      <ol className="text-lg">
        <li>
          The state of the form elements is not controlled by React but is
          managed by the DOM itself.
        </li>
        <li>
          Direct manipulation of the DOM is used to access or modify the values
          of form elements.
        </li>
        <li>
          Changes to the form elements are often handled through direct DOM
          interactions or event listeners.
        </li>
        <li>
          The component doesn't necessarily have its own state for the form
          elements; instead, it relies on the DOM state.
        </li>
      </ol>

      <h1 className="text-xl font-semibold my-5">
        How to validate React props using PropTypes ?
      </h1>
      <hr className="mt-3 mb-5"></hr>
      <h2 className="text-lg mb-3 font-semibold">Install PropTypes:</h2>
      <pre>npm install prop-types</pre>
      <h2 className="text-lg my-3 font-semibold">Import PropTypes:</h2>
      <pre>import PropTypes from prop-types;</pre>
      <h2 className="text-lg my-3 font-semibold">Define propTypes:</h2>
      <pre>propName: PropTypes.dataType.isRequired,</pre>

      <h1 className="text-xl font-semibold my-5">
        Tell us the difference between nodejs and express js. ?
      </h1>
      <hr className="mt-3 mb-5"></hr>
      <h2 className="text-lg my-3 font-semibold">Node.js:</h2>
      <pre>
        <h2 className="text-lg my-3 font-semibold"> Runtime Environment:</h2>
        Node.js is a runtime environment for executing JavaScript code on the
        server side. It allows developers to use JavaScript for server-side
        scripting,<br></br> enabling them to build scalable and high-performance
        web applications.
      </pre>
      <pre>
        <h2 className="text-lg my-3 font-semibold">
          Event-Driven and Non-Blocking I/O:
        </h2>
        Node.js is known for its event-driven, non-blocking I/O model, making it
        efficient for handling a large number of concurrent connections.
      </pre>
      <pre>
        <h2 className="text-lg my-3 font-semibold">Core Functionality:</h2>
        Node.js provides a set of core modules for building server-side
        applications. These modules include modules for handling file systems,
        networking, and more.
      </pre>
      <h1 className="text-xl font-semibold my-5">
        What is a custom hook, and why will you create a custom hook?
      </h1>
      <hr className="mt-3 mb-5"></hr>
      <pre className="mb-10">
        A custom hook in React is a reusable JavaScript function that
        encapsulates logic related to component behavior, facilitating code
        reuse and enhancing code organization.<br></br> You create custom hooks
        to simplify complex logic, improve component readability, separate
        concerns, and enhance testing and maintenance.
      </pre>
    </div>
  );
};

export default Blog;
