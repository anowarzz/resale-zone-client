import React from "react";
import { } from "react-spinners";
import {SyncLoader} from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="z-20 absolute top-40">
          <SyncLoader color="blue" size={15} />
        </div>
    </div>
  );
};

export default Loading;
