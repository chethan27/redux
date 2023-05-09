import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementNumber} from '../src/actions/index'

function App() {

  const dispatch = useDispatch();
  const number = useSelector(redux => redux.number.number);
  const storeA = useSelector(redux => redux);

  console.log(storeA);
  console.log(number);

  const incrementMe =() => {
    dispatch(incrementNumber(number+1));
  }
  return (
    <div className="App">
        Number : 
        {number}

        <input type="button" value="Increment" onClick={incrementMe} />
    </div>
  );
}

export default App;
