//vendor
import React, { useEffect, useReducer } from "react";
//components
import { TodoList } from "./TodoComponents/TodoList";
//reducer
import { todoReducer } from "./todoReducer/todoReducer";
//hooks
import { useForm } from "../../Hooks/useForm";
//styles
import "./todoStyles/todoscreen.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoAppScreen = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handLeInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handLeDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handLeToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handLeSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    } else if (description.trim().length > 12) {
      return alert("Tu tarea no debe contener mas de 12 letras o espacios");
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div className="main">
      <div className="todoapp">
        <h1 className="todoapp__title">TodoApp ( {todos.length} )</h1>
        <div className="todoapp__Explanation">
          Crear tu lista “Todo”. Escribe en el recuadro inferior y haz click en
          agregar. Tu lista se agregará a la tablet. Elimina los elementos
          haciendo click en la papelera.
        </div>
        <div className="row">
          <form onSubmit={handLeSubmit} className="todoapp__from">
            <input
              className="todoapp__from--input"
              type="text"
              name="description"
              placeholder="Tu tarea aqui"
              autoComplete="off"
              onChange={handLeInputChange}
              value={description}
            />
            <button type="submit" className="todoapp__from--button">
              Agregar
            </button>
          </form>
        </div>
      </div>

      <div className={`${todos.length === 0 ? "todoTable" : "todoTableStar"}`}>
        <TodoList
          todos={todos}
          handLeToggle={handLeToggle}
          handLeDelete={handLeDelete}
        />
      </div>
    </div>
  );
};
