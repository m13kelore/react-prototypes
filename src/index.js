import React from "react";
import ReactDOM from "react-dom";

const luckyNumber = () => {
  return Math.ceil(Math.random() * 1000);
};

const greeting = user => {
  let element = (
    <div className="container">
      <h1>Hello, {user.name}</h1>
      <h2 className="text-muted">Your lucky number is: {user.luckyNumber}</h2>
    </div>
  );

  return element;
};

let user = {
  name: "Keith",
  luckyNumber: luckyNumber()
};

ReactDOM.render(greeting(user), document.getElementById("root"));
