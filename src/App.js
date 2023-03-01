import "./App.css";
import { Form } from "./components/Form.js";
import { Table } from "./components/Table.js";
import { useState } from "react";

const hrWk = 7 * 24;
function App() {
  const [taskList, setTaskList] = useState([]);

  const hr = taskList.reduce((subttl, { hr }) => subttl + +hr, 0);

  const addTask = (data) => {
    if (hrWk < hr + +data.hr) {
      return alert("Not enough time for this task");
    }

    setTaskList([...taskList, data]);
  };

  const taskSwitcher = (id, type) => {
    const tempArg = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(tempArg);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const tempArg = taskList.filter((item) => item.id !== id);
      setTaskList(tempArg);
    }
  };
  return (
    <div className="">
      {" "}
      <div class="wrapper">
        <div class="container">
          <div class="row">
            <div class="col text-center mt-5">
              <h1>Not To Do List</h1>
            </div>
          </div>
          {/* Form Area */}
          <Form addTask={addTask} />
          {/* List Area  */}
          <Table
            taskList={taskList}
            taskSwitcher={taskSwitcher}
            deleteTask={deleteTask}
          />

          <div class="row fw-bold">
            <div class="col">
              The total hours allocated for this week is
              <span id="totalHrs">{hr} </span> Hours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
