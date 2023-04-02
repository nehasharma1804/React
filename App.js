const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading)

const parent = React.createElement(
  "parent",
  { id: "parent" },
  React.createElement(
    "child",
    { id: "child" },
    React.createElement("h1",
    { id: "h1" },
    [React.createElement("h1", { id: "h1" }, "I am in h1 tag"), React.createElement("h2", { id: "h2" }, "I am in h2 tag")]
  )))

root.render(parent);
