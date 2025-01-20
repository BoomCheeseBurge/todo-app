import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

import { useState, useEffect } from 'react';


function App() {

  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ];

  // Store the todos
  const [todos, setTodos] = useState([]);
  // Store the selected tab of todolist
  const [selectedTab, setSelectedTab] = useState('All');

  // Add new todo to the todo list
  function handleAddTodo(newTodo) {

    const newTodos = [...todos, {input: newTodo, complete: false}];

    setTodos(newTodos);

    // Save the new todos to the browser's local storage
    handleSaveData(newTodos);
  }
  
  // Mark a todo as completed
  function handleCompleteTodo(index) {

    const newTodos = todos.map((todo, todoIndex) => {

      if(todoIndex === index) {
        todo.complete = true;
      }

      return todo;
    });

    setTodos(newTodos);

      // Save the new todos to the browser's local storage
      handleSaveData(newTodos);
  }

  // Delete the todo from the todos list
  function handleDeleteTodo(index) {

    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);

    setTodos(newTodos);

    // Save the new todos to the browser's local storage
    handleSaveData(newTodos);
  }

  /**
   * Save the current todos into the browser's local storage of JSON 'database' 
   * @param {*} currentTodos 
   */
  function handleSaveData(currentTodos) {
    
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
  }
 
  /**
   * Load any existing todos from the browser's local storage on the App's mount
   */
  useEffect(() => {
    
    /**
     * Check if the local storage is inaccessible, then don't continue
     * OR 
     * check if the todo list does not exist
     */
    if (!localStorage || !localStorage.getItem('todo-app')) return;

    // Retrieve the todos object from the browser's local storage
    let db = JSON.parse(localStorage.getItem('todo-app'));

    // Assignt the todos to the app's todos state variable
    setTodos(db.todos);
  }, []);


  return (
    <>
      <Header todos={todos} />

      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />

      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
