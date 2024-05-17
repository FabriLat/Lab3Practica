import { useState } from "react";
import TasksList from "./components/tasksList/TasksList";
import "./App.css";
import NewTask from "./components/newTask/NewTask";

const tasks = [
  { id: 1, name: "Hacer la cama", state: false },
  { id: 2, name: "Pasear al perro", state: false },
  { id: 3, name: "Vender fafa", state: false },
  { id: 4, name: "Sacar la basura", state: false },
];

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const addNewTaskHandler = (newTask) => {
    if (newTask.trim() !== "") {
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
        return { ...t, state: true };
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
