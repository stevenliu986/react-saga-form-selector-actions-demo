import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.js";
import App from "./App.jsx";
import "./index.css";

const taskData = [
  { id: "100", name: "eat", completed: false },
  { id: "101", name: "shopping", completed: false },
  { id: "102", name: "fishing", completed: false },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App task={taskData} />
  </Provider>,
);
