import { Table } from "react-bootstrap";

const TasksList = ({ tasks, onDeleteTask, onMarkTask }) => {
  const deleteTaskHandler = (task) => {
    onDeleteTask(task);
  };

  const markTaskHandler = (task) => {
    onMarkTask(task);
  };

  return (
    <Table>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td
              style={{
                textDecoration:
                  task.state == true ? "line-through" : false,
              }}
            >
              
              {task.name}
              <button type="button" onClick={() => markTaskHandler(task.id)}>
                Marcar hecha
              </button>
              <button type="button" onClick={() => deleteTaskHandler(task.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TasksList;
