
import { use, useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

// export default function ToDoList() {

//     let [newTodo, setNewTodo] = useState("");

//     let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(),isDone:false }]);

//     let addTask = () => {

//         if (newTodo.trim() === "") return;

//         setTodos((prevTodos) => {
//             return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
//         });

//         setNewTodo("");

//     }

//     let updateTodovalue = (event) => {
//         setNewTodo(event.target.value);

//     };

//     let deleteTodo = (id) => {

//         // setTodos(todos.filter((todo)=>todo.id != id));

//         setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));

//     };

//     let allMarkDone = () => {

//         setTodos( prevTodo=>
//             prevTodo.map((todo) => {
//                 return {
//                     ...todo,
//                     isDone:true

//                 };

//             })
//         );
        
//     }

//     // let upperCaseOne = (id) => {
   

//     let markAsDone = (id) => {

//         setTodos( prevTodo =>
//             prevTodo.map((todo) => {
//                 if (todo.id == id) {
//                     return {
//                         ...todo,
//                         isDone:true
//                     };
//                 }else{
//                     return todo
//                 }

//             })
//         )
//     }

//     return (
//         <div>
//             <h4> Add Task </h4>
//             <input
//                 placeholder="Add A Task"
//                 value={newTodo}
//                 onChange={updateTodovalue}
//             />
//             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//             <button onClick={addTask}>Submit</button>
//             <br></br>
//             <br></br>
//             <br></br>
//             <hr></hr>
//             <h4> Task To Do</h4>
//             <ul>
//                 {
//                     todos.map(todo =>
//                         <li key={todo.id} style={{ marginBottom: '20px' }}>
//                             <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
//                             <button
//                                 style={{ marginLeft: '100px' }}
//                                 onClick={() => deleteTodo(todo.id)} className="delete-btn"

//                             >Delete</button>

//                             <button
//                                 style={{ marginLeft: '100px' }}
//                                 onClick={()=> markAsDone(todo.id)} className="mark-done-btn"
//                             >Mark As Done</button>
//                         </li>


//                     )
//                 }
//             </ul>
//             <br></br>
//             <button onClick={allMarkDone}> Mark All Done </button>

//         </div>
//     )
// }


// DeepSeek
export default function ToDoList() {
  // ... your existing state and functions

    let [newTodo, setNewTodo] = useState("");

    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(),isDone:false }]);

    let addTask = () => {

        if (newTodo.trim() === "") return;

        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
        });

        setNewTodo("");

    }

    let updateTodovalue = (event) => {
        setNewTodo(event.target.value);

    };

    let deleteTodo = (id) => {

        // setTodos(todos.filter((todo)=>todo.id != id));

        setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));

    };

    let allMarkDone = () => {

        setTodos( prevTodo=>
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    isDone:true

                };

            })
        );
        
    }

    // let upperCaseOne = (id) => {
   

    let markAsDone = (id) => {

        setTodos( prevTodo =>
            prevTodo.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone:true
                    };
                }else{
                    return todo
                }

            })
        )
    }






  return (
    <div className="todo-container">
      <h4>Add Task</h4>
      <div className="todo-input-container">
        <input
          placeholder="Add A Task"
          value={newTodo}
          onChange={updateTodovalue}
        />
        <button onClick={addTask}>Submit</button>
      </div>

      <hr className="todo-divider" />

      <h4>Task To Do</h4>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span 
              className={`todo-text ${todo.isDone ? 'todo-done' : ''}`}
            >
              {todo.task}
            </span>
            <div className="todo-buttons">
              <button 
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              <button 
                className="done-btn"
                onClick={() => markAsDone(todo.id)}
                disabled={todo.isDone}
              >
                {todo.isDone ? 'Done' : 'Mark As Done'}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="mark-all-done" onClick={allMarkDone}>
        Mark All Done
      </button>
    </div>
  )
}


























































// GPT 

// import { useState } from 'react';

// export default function TodoList() {
//   const [task, setTask] = useState('');       // Input field state
//   const [tasks, setTasks] = useState([]);   // List of tasks

//   const handleAddTask = () => {
//     if (task.trim() === '') return;         // Prevent adding empty tasks
//     setTasks([...tasks, task]);            // Add new task to the list
//     setTask('');                           // Clear input field
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px' }}>
//       <h2>Simple To-Do List</h2>

//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter a task"
//         style={{ width: '70%', padding: '5px' }}
//       />
//       <button onClick={handleAddTask} style={{ padding: '5px', marginLeft: '10px' }}>
//         Add
//       </button>

//       <ul>
//         {tasks.map((t, index) => (
//           <li key={index} style={{ margin: '10px 0' }}>
//             {t}
//             <button
//               onClick={() => handleDeleteTask(index)}
//               style={{ marginLeft: '10px' }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
