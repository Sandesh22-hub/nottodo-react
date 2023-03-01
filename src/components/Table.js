import React from "react";

export const Table = ({ taskList, taskSwitcher, deleteTask }) => {
  const entryList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");

  badList.reduce((acc, { hr }) => acc + +hr, 0);
  return (
    <div class="row mt-5 g-2">
      <div class="col-md">
        <h2 class="text-center">Entry List</h2>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="task-list">
            {entryList.map((item, i) => (
              <tr key={item.id}>
                <td>${i + 1} </td>
                <td>${item.task} </td>
                <td>${item.hr} hr(s) </td>
                <td class="text-end">
                  <button
                    onclick={() => deleteTask(item.id)}
                    class="btn btn-danger"
                  >
                    {" "}
                    <i class="fa-solid fa-trash"></i>{" "}
                  </button>
                  <button
                    onClick={() => taskSwitcher(item.id, "bad")}
                    class="btn btn-success"
                  >
                    {" "}
                    <i class="fa-solid fa-right-long"></i>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="col-md">
        <h2 class="text-center">Bad List</h2>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="bad-task">
            {badList.map((item, i) => (
              <tr key={i}>
                <td>${i + 1} </td>
                <td>${item.task} </td>
                <td>${item.hr} hr(s) </td>
                <td class="text-end">
                  <button
                    onclick={() => deleteTask(item.id)}
                    class="btn btn-danger"
                  >
                    {" "}
                    <i class="fa-solid fa-trash"></i>{" "}
                  </button>
                  <button
                    onClick={() => taskSwitcher(item.id, "entry")}
                    class="btn btn-success"
                  >
                    {" "}
                    <i class="fa-solid fa-left-long"></i>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div class="text-end fw-bold">
          You can save{" "}
          <span id="totalBadHrs">
            {badList.reduce((acc, { hr }) => acc + +hr, 0)}
          </span>{" "}
          Hours
        </div>
      </div>
    </div>
  );
};
