
import './App.css'

import LudoBoard from './LudoBoard'

import { useState } from "react";

import ToDoList from '../ToDoList';

function App() {

  // const [data, setData] = useState({
  //   name: 'lovish',
  //   age: 21
  // });

  // return (
  //   <>
  //     <h1>My name is {data.name} and my age is {data.age}</h1>
  //     <button onClick={() => setData({ ...data, name: 'CWH' })}>Click Me</button>
  //   </>
  // )
  


  return (
    <>
     
      <ToDoList />

    </>
  )
}

export default App
