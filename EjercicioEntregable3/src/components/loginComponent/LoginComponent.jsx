import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const LoginComponent = () => {
  const [username, setUsername] = useState("");

  const handlerInputChange = (event) => {
    const inputName = event.target.value;
    if (inputName.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
      //inputName.pop(); Esta linea la comento para que la validacion de la linea 20 no esté al pedo
      //se me ocurrio borrar el ultimo caracter al ingresar una "o" xq sino son muy molestas las alerts.
    }
    setUsername(inputName);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
      return;
    }

    // Si todo sale bien lo registro
    alert("¡Usuario registrado correctamente!");
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <label>Ingrese usuario:</label>
      <div>
        <input
          type="text"
          name="name"
          value={username}
          onChange={handlerInputChange}
        />
      </div>

      <Button type="submit" className="btn btn-success">
        Registrarse
      </Button>    
      <p>{username}</p>
    </Form>
  );
};
export default LoginComponent;
