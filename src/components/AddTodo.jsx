import { useRef } from "react";
import style from "./AddTodo.module.css";
import { MdAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElements = useRef();
  const dueDateElements = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElements.current.value;
    const dueDate = dueDateElements.current.value;
    todoNameElements.current.value = "";
    dueDateElements.current.value = "";
    onNewItem(todoName, dueDate);
  };

  // Form -> It is use for sending data in server.
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={style.inputWidth}
            ref={todoNameElements}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            className={style.inputWidth}
            ref={dueDateElements}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className={`col-2 ${style["itemsContainer"]}`}>
          <button className="btn btn-success kg-btn">
            <MdAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
