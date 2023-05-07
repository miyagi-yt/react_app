import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">{props.message}</div>;
}

function CardMessage(props) {
  return <div className="card p-3 h5 border-primary text-center">{props.message}</div>;
}

function App() {
  const [message, setMessage] = useState('Welcome to Hooks!');

  const [count, setCount] = useState(0);
  const clickFunc = () => setCount(count + 1);

  const [flag, setFlag] = useState(false);
  const changeFlag = (e) => setFlag(e.target.checked);

  const doAction = () => {
    let res = window.prompt('type your name:');
    setMessage('Hello, ' + res + ' !!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <a
            className="App-link"
            href="./sample/react_app.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Sample Page
          </a>
        </div>
        <div>
          <p className="h5">{message}</p>
        </div>
        <div>
          <p className="h5 mb-3">click: {count} times!</p>
          <button className="btn btn-primary" onClick={clickFunc}>
            Click Me!!
          </button>
        </div>
        <div className="form-group h6 text-center pt-3">
          <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
          <label className="form-check-label" htmlFor="check1">
            Change Form Style.
          </label>
        </div>
        <div className="container">
          <AlertMessage message={message} />
          <CardMessage message={message} />
        </div>
        <div>
          <button className="btn btn-primary" onClick={doAction}>
            Click Me & Entry Your Name !!
          </button>
        </div>
        {flag ? (
          <div>
            <Rect x="200" y="200" w="200" h="200" c="cyan" r="25" />
            <Rect x="300" y="300" w="200" h="200" c="magenta" r="75" />
            <Rect x="400" y="400" w="200" h="200" c="black" r="100" />
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
}

export default App;
