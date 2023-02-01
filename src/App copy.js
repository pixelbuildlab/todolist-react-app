import React, {useState} from 'react';
import Header from './header';
import './App.css';
import ToDoList from './TodoList';
import data from './data.json';

function App() {
const [toDoList, setToDoList]= useState(data);
  return (
    <div className='App'>
    <Header />
    <ToDoList toDoList={toDoList}/>
    </div>
   );
}

export default App;
