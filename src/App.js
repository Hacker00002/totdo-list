import { useState } from "react";
import "./App.css";
import InputApp from "./components/InputApp/InputApp";

function App(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "React.js",
    },
    {
      id: 2,
      title: "Javascript",
    },
    {
      id: 3,
      title: "Angular.js",
    },
    {
      id: 4,
      title: "Vue.js",
    },
  ]);

  const addTodoHandler = () => {
    let newTodo = {
      id: Math.random().toString(),
      title: input,
    };
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const deleteHandler = (id) => {
    const result = todo.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodo(result);
  };
  return (
    <div className="App">
      <div className="card">
        <input
          value={input}
          required
          onChange={(evt) => setInput(evt.target.value)}
          type="text"
          placeholder="Add todo"
          className="input"
        />
        <button onClick={addTodoHandler} className="ADD" type="submit">
          Add
        </button>
      </div>
      <InputApp deleteTodo={deleteHandler} key={todo.id} todo={todo} />
    </div>
  );
}

export default App;
