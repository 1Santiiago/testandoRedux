import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connect } from "react-redux";

function App({ count, increment, name, setName }) {
  const handleOnClick = () => {
    increment();
  };

  const handleOnChange = (event) => {
    setName(event.target.value);

  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <br />
          <input
            style={{ outline: "0" }}
            type="text"
            name="nome"
            value={name}
            onChange={handleOnChange}
          />
        </p>
        {name && `Nice to meet you, ${name}`}
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
    name: state.name.inputText.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "counter/increment" }),
    setName: (newName) => dispatch({ type: "name/setName", payload: newName }),
  };
};
;

export default connect(mapStateToProps, mapDispatchToProps)(App);
