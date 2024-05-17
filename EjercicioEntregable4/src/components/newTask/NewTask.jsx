import { useState } from "react";
import { Form } from "react-bootstrap";

const NewTask = ({ onAddTask }) => {
  const [task, setNewTask] = useState("");

  const submitTaskHandler = (event) => {
    event.preventDefault();
    onAddTask(task);
    setNewTask("");
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <Form onSubmit={submitTaskHandler}>
      <label htmlFor="">Nueva tarea: </label>
      <input type="text" value={task} onChange={handleInputChange} />
      <button type="submit">Agregar tarea</button>
    </Form>
  );
};

export default NewTask;
