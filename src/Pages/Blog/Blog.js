import React from "react";
import differencePhoto from "../../assets/reac-vue-angular.png";
import prototype from '../../assets/prototype.png'

const Blog = () => {
  return (
    <div className="w-[98%] mx-auto border-gray-100 pb-12 border mt-8 shadow-lg rounded">

      <div className="mt-16  rounded w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold ">
          1. What are the different ways to manage a state in a React
          application?
        </h3>

        <p className="mt-6 text-lg">
          Every React component has a built-in state. This state is an object
          which stores the property values that belong to a component. State is
          able to keep data from different components in-sync because each state
          update re-renders all relevant components. svg viewer The built-in way
          that React provides for setting component states is by using
          setState() and adding “local state” to a class. There are several
          other ways to manage state​s in React, including the use of:
        </p>
        <ul className="list-disc">
          <li> Hooks</li>
          <li> React Context API</li>
          <li> Apollo Link State</li>
        </ul>

        <p className="font-semibold">
          There are four main types of state you need to properly manage in your
          React apps:
        </p>

        <ol className="list-decimal">
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>Local state</li>
          <li>URL state</li>
        </ol>
      </div>

      <div className="mt-16  rounded  w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold">
          2. How does prototypical inheritance work?
        </h3>

        <p className="mt-6 text-lg">
          Inheritance is the process by which one object can be based on
          another. This lets the objects to share each other’s properties.
          Prototypical inheritance refers to the ability to access object
          properties from another object. We use a JavaScript prototype to add
          new properties and methods to an existing object constructor. We can
          then essentially tell our JS code to inherit properties from a
          prototype. Prototypical inheritance allows us to reuse the properties
          or methods from one JavaScript object to another through a reference
          pointer function.
        </p>
<div>
<img src={prototype} alt="" className="max-w-72 mx-auto mt-8"/>
</div>
      </div>

      <div className="mt-16  rounded  w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold">
          3. What is a unit test? Why should we write unit tests?
        </h3>

        <p className="mt-6 text-lg">
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended. Unit testing is an important step in the development
          process, because if done correctly, it can help detect early flaws in
          code which may be more difficult to find in later testing stages.
        </p>
        <p className="text-lg font-semibold mb-2 mt-4">
          Advantages to unit testing
        </p>
        <ul className="list-disc">
          <li>
            The earlier a problem is identified, the fewer compound errors
            occur.
          </li>
          <li>
            Costs of fixing a problem early can quickly outweigh the cost of
            fixing it later.
          </li>
          <li>Debugging processes are made easier.</li>
          <li>Developers can quickly make changes to the code base.</li>
          <li>
            Developers can also re-use code, migrating it to new projects.
          </li>
        </ul>
      </div>

      <div className="mt-16  rounded  w-[80%] mx-auto p-6">
        <h3 className="text-2xl md:text-3xl p-2 font-bold">
          4. React Vs Angular Vs Vue
        </h3>

        <p className="my-6 text-lg font-semibold">
          The Differences of React Vs Angular Vs Vue is Described Below with a
          picture
        </p>
   <div>
   <img src={differencePhoto} alt="" className="max-w-72"/>
   </div>
      </div>
    </div>
  );
};

export default Blog;
