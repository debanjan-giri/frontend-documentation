import React from "react";
import "./my_style.css";

const Component_JSX = () => {
  return <div>Component_JSX</div>;
};

export default Component_JSX;

// component
// A component is a piece of the UI that has its own logic and memory
// component is a reusable function that returns a single Jsx element
// file & component start with capital letter,it create diff tag & component
// create tree like architecture,so data one way flow parent to child
// component can be small as a button or large as a web page but
// reusable components make code allways easier to maintain and debug
// same component can be used multiple times within same page but
// they act as independent ui with their own memory with own logic
// we declare component in self closing tag <Button/>

function Button() {
  return <button>Click me</button>;
}

// react fragment
// problem is component return only single jsx element
// but with tree like structure one div can retun 10000 div
// using : <></>,<div></div>,<Fragment></Fragment>,any tag
// <></> is used when we dont want to add extra div in dom

function Nested() {
  return (
    <>
      <p>hello world</p>

      {/* multiple time used */}
      <Button />
      <Button />
    </>
  );
}

// Re-rendering Issues
// inner component gets re-created every time when parent component re-renders
// problem : Inner components not reusable and not follow react modular system

function BookList() {
  // bad practice
  const Book = () => {
    return <h1>C++ Book</h1>;
  };

  return (
    <>
      <Book />
      <Book />
    </>
  );
}

// props
// props are used to pass one way data from parent to child or nested
// props are immutable ,perent props data can not be changed from child
// prop is object of key value pair, we can pass any type of data

function Parent() {
  return (
    <>
      <Child data="123" />
      <Child data="1246" />
    </>
  );
}

function Child(prop) {
  return (
    <>
      <p>{prop.data}</p>
    </>
  );
}

// prop drilling issue
// passing data from parent to child to nested child
// so prop drilling is bad practice,it make code complex
// so use context api , redux , zustand for global state management

function A() {
  return (
    <div className="bg-dark p-3 m-3">
      <h1>Component A</h1>

      {/* create a tree */}
      <B data="Click me" />

      {/* create another tree */}
      <B data="Click you" />
    </div>
  );
}

function B(prop) {
  return (
    <div className="bg-success p-3 m-3">
      <button className="p-4">{<C data={prop.data} />}</button>
    </div>
  );
}

function C(prop) {
  console.log(prop.data);
  return <div className="bg-warning">{prop.data}</div>;
}

// prop concept
// passing diff data to diff component because they act independent
function UserList() {
  let fullDetails = {
    name: "Tony",
    age: 30,
  };

  let ageKeyMissing = {
    name: "Dev",
  };

  return (
    <div className="bg-dark p-3 m-3 h-25 w-25">
      <h5>User List : </h5>

      {/* extra prop data is passing but ReadDetails not supported */}
      <ReadDetails name="John" age="25" />
      <ReadDetails name="Tony" age="30" country="USA" />
      <ReadDetails name="Jack" age="35" location="New York" />

      <hr />
      {/* we kow prop is object,we can pass obj using destructure */}
      <ReadDetails {...fullDetails} />
      <ReadDetails age="40" {...ageKeyMissing} />
    </div>
  );
}

function ReadDetails({ name, age }) {
  // props are object, we can access data using dot notation
  // destructure props in argument or using local variable

  return (
    <div className="bg-success p-3 m-3">
      <h5>My Name is : {name}</h5>
      <Age age={age} />
    </div>
  );
}

const Age = (props) => {
  const { age } = props;
  return (
    <div className="bg-warning p-1">
      <h5>Age : {age}</h5>
    </div>
  );
};

// default props
// how to handle ? when parent not pass any data to its child
function UserList_2() {
  return (
    <div>
      <ReadDetails_2 />
      <ReadDetails_2 name="AAA" country="BBB" />
    </div>
  );
}

function ReadDetails_2({
  name = "Stark",
  country = "USA",
  location = "New York",
}) {
  return (
    <div className="border p-2 m-2 w-25">
      <h1 className="fs-5 m-0">My Name is : {name}</h1>
      <p className="fs-6 m-0">Country : {country}</p>
      <p className="fs-6 m-0">Location : {location}</p>
    </div>
  );
}

// JSX
// Jsx is a combination of html and javascript
// curly braces {} are used to write javascript code within Jsx
// even { <> </> } render one element at a time

function JsxExpression() {
  // variable can store diff data
  let name = "Tony";
  let element = <p>cat</p>;
  let component = <Button />;
  let imageData =
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg";

  // function
  function myFn() {
    return 99;
  }

  // component
  function MyTag() {
    return <h1>My Tag</h1>;
  }

  return (
    <>
      {/* data */}
      {"dev"}
      {4 + 4}
      {element}
      {component}

      <hr />

      {/* function */}
      {myFn()}
      {myFn() * 56}

      <hr />

      {/* component or tag */}
      {<p>hello</p>}
      {MyTag()}
      {<MyTag />}

      <hr />

      {/* tag dynamic data */}
      <h1>My name is: {name}</h1>
      <h1>My name is {"Tony"}</h1>

      <hr />

      {/* image */}
      <img src={imageData} />

      <hr />
      {/* null, undefined, false, true = display nothing */}
      {null}
      {undefined}
      {false}
      {true}
    </>
  );
}

// conditional Jsx rendering
function ConditionalJsx() {
  let condition = true;

  const Component = (data) => {
    return <h5>{data.n}</h5>;
  };

  return (
    <>
      {/* ternary */}
      <h1>{condition ? "dev" : "tony"}</h1>
      {condition ? <Component n={1} /> : undefined}

      {/* and operator return last truthy value */}
      {condition && <h1>Hello</h1>}
      {true && condition && <Component n={2} />}
      {6 > 7 && <Component n={3} />}
      {<Component n={4} /> && <Component n={5} />}

      {/* or operator return first truthy value */}
      {true || <Component n={6} />}
      {false || <Component n={7} />}
      {<Component n={8} /> || <Component n={9} />}

      {/* array mapping */}
      {["A", "B", "C"].map((item, index) => {
        return item === "C" && <Component n={index} />;
      })}

      {/* template litarel */}
      {`hello ${67 > 90 ? "1" : "2"}`}
    </>
  );
}

// css and conditional css
// inline css , external css
// vanila html = class vs jsx => className
// jsx style took object as a css style properties
// vanila css => min-height vs jsx => minHeight

function Css() {
  // css object
  const obj = {
    color: "green",
    fontSize: "20px",
  };

  const cssObj = {
    pic: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
    width: "200px",
    height: "200px",
  };

  const temperature = "Hot";

  return (
    <>
      {/* inline css */}
      <h1 style={{ color: "blue", fontSize: "20px" }}>cat</h1>
      <img
        src={cssObj.pic}
        style={{ width: cssObj.width, height: cssObj.height }}
      />
      <h1 style={obj}>devloper</h1>

      {/* external css */}
      <h1 className="myCss">1</h1>

      <hr />
      {/* conditional css */}
      <h1 className={true ? "myCss" : "myCss_2"}>2</h1>
      <h1 style={{ color: temperature === "Hot" && "red" }}>Weather</h1>

      <hr />
      {/* array mapping */}
      {["black", "green", "blue"].map((item, index) => {
        return (
          <h1 key={index} style={{ color: item }}>
            {item}
          </h1>
        );
      })}
    </>
  );
}

// component conditional return
// return nothing : <> </> , undefined, null, false , true
// but null is best practice to render nothing
function ConditionReturn() {
  let condition = true;
  let type = "button";

  // if-else
  if (condition) {
    return <Button />;
  } else {
    return null; // this render nothing
  }

  // ternary
  return condition ? <></> : <h1>dev</h1>;

  // logical && operator
  return true && <Button />;

  // logical || operator
  return <h1>dev</h1> || undefined;

  // switch case
  // it helps when single component need to return diff ui based on type
  switch (type) {
    case "button":
      return <Button />;
    case "h1Tag":
      return <h1>dev</h1>;
    case "redColor":
      return <p style={{ color: "red" }}>red color</p>;
    default:
      return false;
  }

  // array mapping
  return [1, 2, 3].map((item) => {
    return <Button />;
  });
}

// special props
// specificly children name used to create special prop
// it take componet and create wrapper component for extending feature
// component syntax : <Component>  another component arg  </Component>

function Wrapper({ children }) {
  return <div className="bg-dark">{children}</div>;
}

function NewApp() {
  // when this componet used , it always used wrapper feature
  return (
    <Wrapper>
      <h1>dev</h1>
      <h1>Hello, World!</h1>
      <Button />
    </Wrapper>
  );
}

// higher order component (HOC)
// is a function that takes a component and returns a new enhanced component
const PowerIncrement = (Argument) => {
  return function myFn(props) {
    return (
      <div className="bg-black p-3">
        <Argument {...props} />
      </div>
    );
  };
};

// normal component
function TextColor({ color }) {
  return <h1 style={{ color: color }}>Color</h1>;
}

function HocApp() {
  const MutateTextComponent = PowerIncrement(TextColor);
  return (
    <div>
      <MutateTextComponent color="yellow" />
    </div>
  );
}

// Pure Component
// only re-renders when its props or state actually change
const MyComponent = React.memo(({ text }) => {
  console.log("Rendered");
  return <h1>{text}</h1>;
});

function App() {
  return <MyComponent text="Hello, World!" />;
}

// stateless component: when component depends on prop data
// stateful component: when component has its own state data
