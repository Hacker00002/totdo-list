import "./InputApp.css";

const InputApp = (props) => {
  return (
    <div>
      <ul>
        {props.todo.map((elem) => {
          return (
            <li>
              <p>{elem.title}</p>
              <button
                className="delete"
                onClick={() => props.deleteTodo(elem.id)}
              >
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InputApp;
