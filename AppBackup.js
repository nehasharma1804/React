import React from "react";
import ReactDOM from "react-dom/client";
/* const heading = React.createElement(
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

root.render(parent); */

const root = ReactDOM.createRoot(document.getElementById("root"));
const header = React.createElement("div",{className:"title"},React.createElement(
  "h1",
  {  },
  React.createElement(
    "h2",
    { },
    React.createElement("h3", { }, "This is h3 tag from react create element")
  )
));
const headerJSX = (
    <div className="title">
  <h1 >
    <h2 >
      <h3 >This is a h3 tag from JSX</h3>
    </h2>
  </h1>
  </div>
);


const Title = () => (
  <h2>This is a functional title component</h2>
);
// const HeaderComponent = () => (
//     /* single root only,AST tree,jsf can only have one root*/
//     <>
// <div className="container">
// {100*200}
// {Title()}
//  <Title/>
//  <Title></Title>
//     <h1>This is a Functional header component</h1>
//   </div>
//   </>
// )

/* const HeaderComponent=()=>(
<>
<div className="title">
<h1>
    <h2>
        <h3>This is h3 tag from functional component</h3>
    </h2>
</h1>
</div>
</>
) */
const heading = (
    <div className="head" tabIndex={5}>
      Namaste React from JSX
      {header}
      {headerJSX}
     
    </div>
  );
  

console.log(header);
console.log(headerJSX);
//root.render(heading);
const HeaderComponent=()=>(

   <div className="container">
    <div className="element">
        <img className="image" src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=2000"/>
  </div>
  <div className="element">
      <input className="input"type="text"/>
        </div>
  <div className="element">
  <img   className="image" src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=2000"/>
  </div>
  </div>
    
)

root.render(<HeaderComponent/>)
