import React from "react";
import { } from "react-spinners";
import {MoonLoader} from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="z-20 absolute top-40">
          <MoonLoader color="blue" size={100} />
        </div>
    </div>
  );
};

export default Loading;
