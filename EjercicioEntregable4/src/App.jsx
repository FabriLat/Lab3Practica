import { useState } from "react";
import TasksList from "./components/tasksList/TasksList";
import "./App.css";
import NewTask from "./components/newTask/NewTask";

const tasks = [
  { id: 1, name: "Hacer la cama", state: "incomplete" },
  { id: 2, name: "Pasear al perro", state: "incomplete" },
  { id: 3, name: "Vender fafa", state: "incomplete" },
  { id: 4, name: "Sacar la basura", state: "incomplete" },
];

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const addNewTaskHandler = (newTask) => {
    if (newTask.length > 0) {
      const taskData = { name: `${newTask}`, id: Math.random() };
      setTaskList((prevList) => [taskData, ...prevList]);
    }
  };

  const deleteTaskHandler = (task) => {
    const newTaskList = taskList.filter((t) => t.id !== task);
    setTaskList(newTaskList);
  };

  const markTaskHandler = (task) => {
    const newTaskList = taskList.map((t) => {
      if (t.id === task) {
        return { ...t, state: "complete" };
      } else {
        return t;
      }
    });
    setTaskList(newTaskList);
  };

  return (
    <div>
      <NewTask onAddTask={addNewTaskHandler} />
      <TasksList
        tasks={taskList}
        onDeleteTask={deleteTaskHandler}
        onMarkTask={markTaskHandler}
      />
    </div>
  );
}

export default App;
