import React from "react";

const Blog = () => {
  return (
    <div className="w-[98%] mx-auto border-gray-100 pb-12 border mt-8 shadow-lg rounded">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-4 pb-10 ">
        Node Js And Database Basic Concepts
      </h1>

      <div className="mt-16  rounded w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold ">
          1. What Are The Differences between SQL and NoSQL ??
        </h3>

        <div className="overflow-x-auto mt-8">
          <table className="table">
            <thead>
              <tr>
                <th>SQL Database</th>
                <th>NoSQL Database</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  SQL Databases follows RELATIONAL DATABASE MANAGEMENT SYSTEM
                  (RDBMS){" "}
                </td>
                <td>
                  NoSQL Database Does Not Follows RELATIONAL DATABASE MANAGEMENT
                  SYSTEM
                </td>
              </tr>

              <tr className="hover">
                <td>SQL Database is Vertically Scalable</td>
                <td>NoSQL Database is Horizontally Scalable </td>
              </tr>

              <tr>
                <td>SQL has fixed predefined schema</td>
                <td>No SQL has dynamic schema</td>
              </tr>
              <tr>
                <td>SQL is not suitable for hierarchical data storage</td>
                <td>No SQL is best suitable for hierarchical data storage</td>
              </tr>
              <tr>
                <td>SQL can be used for complex large scale queries</td>
                <td>No SQL is not good for large complex queries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16  rounded  w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold">
          2. What is JWT, and how does it work?{" "}
        </h3>

        <p className="mt-6 text-lg">
          {" "}
          JWT or JSON Web Token is away for securely transmitting information
          between parties as a JSON object. JSON Web Token is an open industry
          standard used to share information between two entities, usually a
          client (like your app’s frontend) and a server (your app’s
          backend).They contain JSON objects which have the information that
          needs to be shared. Each JWT is also signed using cryptography
          (hashing) to ensure that the JSON contents (also known as JWT claims)
          cannot be altered by the client or a malicious party.
        </p>
      </div>

      <div className="mt-16 rounded w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold ">
          3. What is the difference between Javascript and NodeJS?
        </h3>

        <div className="overflow-x-auto mt-8">
          <table className="table w-[100%]">
            <thead>
              <tr>
                <th>JavaScript</th>
                <th>Node Js</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  JavaScript is an open source, cross platform lightweight <br />
                  scripting programming language, used in developing dynamic web
                  applications
                </td>
                <td>
                  Node Js is a JavaScript runtime environment , which allows
                  JavaScript to run on the server
                </td>
              </tr>

              <tr className="hover">
                <td>
                  JavaScript is a programming language, works in any proper
                  browser engine{" "}
                </td>
                <td>
                  Node Js is a JavaScript interpreter with some valuable
                  libraries
                </td>
              </tr>

              <tr>
                <td>JavaScript is generally used on the client side server</td>
                <td>Node Js is generally used on the server side</td>
              </tr>

              <tr>
                <td>Javascript can run on any engine including V8</td>
                <td>Node Js is only supported by v8 engine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16  rounded  w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold">
          4. How does NodeJS handle multiple requests at the same time?
        </h3>

        <p className="mt-6 text-lg">
          NodeJS server uses an EventQueue, which queues incoming client
          requests and an EventLoop which is an infinite loop that receives
          requests and processes them. This EventLoop is single threaded and
          acts as a listener for the EventQueue which processes incoming
          requests based on FIFO policy. When a new request comes in, NodeJS
          checks if it requires any blocking IO operations, if not, the
          EventLoop processes it and sends the response back to the client
          directly. If yes, then the request is forwarded to the thread manager,
          which then based on an algorithm, picks up an idle thread from the
          pool and lets it process the request. After completion of the request
          processing operation, the thread, returns the response back to the
          EventLoop which is then forwarded to the client. Thus, even if an
          incoming request needs blocking IO, the thread pool allows it to run
          asynchronously in the background without blocking the EventLoop and it
          gives a seamless experience of NodeJS handling multiple incoming
          requests concurrently without any persistent delays or bottlenecks.
        </p>
      </div>
    </div>
  );
};

export default Blog;
