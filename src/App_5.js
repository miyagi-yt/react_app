import React, { useState } from 'react';
import './App.css';
import usePersist from './Persist';

function AlertMessage(props) {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState(0);
  const [mydata, setMydata] = usePersist('Mydata', null);

  const doChangeName = (event) => setName(event.target.value);
  const doChangeMail = (event) => setMail(event.target.value);
  const doChangeAge = (event) => setAge(event.target.value);
  const onAction = (event) => {
    const data = {
      name: name,
      mail: mail,
      age: age,
    };
    setMydata(data);
  };
  return (
    <div className="alert alert-primary h5 text-center">
      <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          onChange={doChangeName}
          required
          pattern="[A-Za-z _,.]+"
        />
      </div>
      <div className="form-group">
        <label>Mail</label>
        <input
          type="text"
          className="form-control"
          onChange={doChangeMail}
          required
          pattern="[A-Za-z_.@]+"
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          onChange={doChangeAge}
          required
          min="0"
          max="100"
        />
      </div>
      <button onClick={onAction} className="btn btn-primary">
        Save it!
      </button>
    </div>
  );
}

function App4() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample App_5</h4>
        <AlertMessage />
      </div>
    </div>
  );
}

export default App4;
