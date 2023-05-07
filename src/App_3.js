import React, { useEffect, useState } from 'react';
import './App.css';

function AlertMessage(props) {
  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{props.msg}</h5>
    </div>
  );
}

function App3() {
  const [val, setVal] = useState(0);
  const [msg, setMsg] = useState('Set a number...');

  const doChange = (event) => setVal(event.target.value);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i <= val; i++) {
      total += 1;
    }
    setMsg('total: ' + total + '.');
  }, [val]);

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample App_3</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input type="number" className="form-control" onChange={doChange}></input>
        </div>
      </div>
    </div>
  );
}

export default App3;
