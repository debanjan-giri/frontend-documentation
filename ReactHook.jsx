import React, { useState, Component, useEffect } from "react";
import { use } from "react";

const Hook_customHook = () => {
  return (
    <div>
      <Unmounting_ />
    </div>
  );
};

export default Hook_customHook;

// previously react developers are using class component
// lifecycle :componentDidMount, componentDidUpdate,componentWillUnmount
// state: this.setState(),require hoc to render props to share logic acros

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// version 16.8
// react hooks eliminate the need for class components.now Hooks allow
// functional components to manage state and side effects. Share logic
// between components without hoc.Cleaner => Lifecycle methods: useEffect
// managing state: useState

// rules of hooks
// 1. hooks must be called in function component or custom hooks
// 2. Only Call Hooks at the Top Level of functional component

function FnCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// component state
// State in React refers to data or variables that represent the current
// condition , its a way to manage dynamic information that change over
// time,When state,prop changes,React triggers re-render of the component
// to reflect the updated information.problem occurs when you update a
// variable because react will not re-renders the component that reason
// is we use useState hook,we just want to re-render that display value

// useState
// initial value = 0 (useState(0))
// current value = 0 (count)
// updateding the value = using (setCount function)
// also setState provide callback function,that have acceess to current value

function UseState_() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          setCount((pre) => pre - 1);
        }}
      >
        decrement
      </button>
    </>
  );
}

// component Lifecycle Stages:
// Mounting: When a component is being created and inserted into the DOM.
// Updating: When state or props change,causing component to re-render.
// Unmounting: When a component is being removed from the DOM.

// useEffect
// its provide side effect to component , provide a callback function
// These stages allow you to run custom code at specific points,
// such as when the component is created, updated, or destroyed.

// creating phase or mounting phase
// when page refresh,all component will unmounting mean remove from DOM
// then again the component is added to the DOM (mounting phase again)
// Re-running side effects when certain props or state values change
function Created_() {
  useEffect(() => {
    console.log("page loaded");
  }, []);
  // this empty array ensure useEffect run once when component mount

  return <h1>useEffect</h1>;
}

// updating phase
function Updated_() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // Effect 1: Runs only on mount
  useEffect(() => {
    console.log("Effect 1: Page loaded (mount only)");
  }, []);

  // Effect 2: Runs on every render , ( mount and update )
  //  because empty dependency array
  useEffect(() => {
    console.log("Effect 2: Page updated (every render)");
  });

  // Effect 3: Runs on mount and when specific state changes
  useEffect(() => {
    console.log("Effect 3: Count state updated", count);
  }, [count]);

  return (
    <>
      {/* it will print page updated and state updated */}
      <h1>{count}</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(count + 1)}
      >
        count click
      </button>

      {/* it will print page updated */}
      <h1>{data}</h1>
      <button className="btn btn-primary m-2" onClick={() => setData(data + 1)}>
        data click
      </button>
    </>
  );
}

// unmounting phase
// rendering and removal from the DOM are two different concepts in React
// If you click a button that updates the state or prop, the component will re-render,
// React updates the component’s output in the DOM but still mounted in the DOM
// Unmounting refers to the complete removal of the component from the DOM.
// Unmounting only happens if component is conditionally removed or page navigate
// when you manually refresh the page, all components are unmounted and remounted.

// When a component is being removed from the DOM.
// (--------------)  <== during this time we want to run some function
// again component is added to the DOM,

function Component_() {
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  return <h1>Component</h1>;
}

function Unmounting_() {
  const [enable, setEnabel] = useState(true);
  return (
    <div>
      {enable && <Component_ />}
      <button onClick={() => setEnabel(!enable)}>Toggle</button>
    </div>
  );
}

// useContext
// useReducer
// useCallback
// useMemo
// useRef
// useLayoutEffect
// useId
// useTransition
// custom hooks
