import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import App02 from "./App02";
import App03 from "./App03";
const rootEl = document.querySelector("#root");

// Create React EL
const button = React.createElement(
  "button",
  {
    className: "btn",
    onClick: (e) => {
      console.log("btn");
    },
  },
  "Click me"
);

const h1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hoc Tap JS"
);

const h3 = [...Array(50).keys()].map((item, index) =>
  React.createElement("h3", {}, `Item ${item + 1}`)
);

console.log(h3);

const div = React.createElement(
  "div",
  {
    id: "content",
    className: "content",
    "data-index": "hihi",
  },
  h1,
  button,
  ...h3
);

console.log(div);

const div1 = (
  <div className="content">
    <h1>React</h1>
    <h3>item 3</h3>
    <h3>item 3</h3>
    <button
      className="btn"
      onClick={() => {
        console.log("hello");
      }}
    >
      Click me
    </button>
  </div>
);

// Component
const ProductItem = () => {
  return <h2>Item</h2>;
};
const Product = () => {
  return (
    <div>
      <h1>DSSP</h1>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </div>
  );
};

// Render UI
ReactDom.createRoot(rootEl).render(<App03 />);
