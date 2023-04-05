import React, { useState } from 'react';
import './App.css';
import store from './store'


import getUserById from './actions';

export default function App() {

  const [data, setData] = useState(null);
  
  store.subscribe(() => {
    const newData = store.getState();
    console.log(newData)
    if(newData.isLoading)
      setData("Loading...")
    else if(newData.error)
      setData("Error: ", newData.error);
    else if(newData.data)
      setData(newData.data)
  })


  return (
    <div className="App">
      <button onClick={() => {
        getUserById(1);
      }} className="fetch1">Fetch 1</button>
      <button onClick={() => {
        getUserById(2);
      }} className="fetch2">Fetch 2</button>
      <p className="data">{data}</p>
    </div>
  );
}

