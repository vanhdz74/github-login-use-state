import React from "react";

const Posts = ({ onGetData }) => {
  return (
    <div>
      <button
        onClick={() => {
          onGetData("Hellos");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Posts;
