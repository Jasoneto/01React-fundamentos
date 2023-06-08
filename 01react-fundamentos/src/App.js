import React from "react";
// import './App.css';

const todos = [
  { text: 'cut onions', completed: false },
  { text: 'take the introductory course to React', completed: false },
  { text: 'cry intensely', completed: false },
]

function App() {
  return (
  <React.Fragment>
    {/* <TodoCounter /> */}
    <h2>
      You've completed 2 out of 3 Todo
    </h2>

    {/* <TodoSearch /> */}
    <input placeholder="Onion" />

    {/* <TodoList>
      {todos.map(todo => (
        <TodoItem />
      ))}
    </TodoList> */}

    {/* <CreateTodoButton/> */}
    <button>+</button>
  </React.Fragment>
  );
}

export default App;
