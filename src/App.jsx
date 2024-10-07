import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectCounterAddTen } from "./counterSelector.js";
import Form from "./Form.jsx";
import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App({ task }) {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);
  const count10 = useSelector(selectCounterAddTen);
  const [tasks, setTasks] = useState(task);

  const addTask = (name) => {
    const newTask = { id: uuidv4(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  function deleteTask(id) {
    const remainTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainTasks);
  }

  return (
    <>
      <h1>计数器的数值为：{count}</h1>
      <h1>计数器+10的数值为：{count10}</h1>

      {/* 使用saga来派发action */}
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      {tasks.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <button onClick={() => deleteTask(item.id)}>删除</button>
        </div>
      ))}
      <Form onSubmit={addTask} />
    </>
  );
}

App.propTypes = {
  task: PropTypes.array.isRequired,
};
export default App;
