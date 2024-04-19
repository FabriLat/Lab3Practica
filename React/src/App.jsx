import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const average = (
    netIncomes.reduce(
      (accumulator, currentValue) => accumulator + currentValue.income,
      0
    ) / netIncomes.length
  ).toFixed(2);

  const TableComponent = () => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ingreso neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((name, index) => (
            <tr key={index}>
              <td>{name.brand}</td>
              <td>{name.income}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  return (
    <div>
      <TableComponent />
      <p>Promedio de ingresos: {average}</p>
    </div>
  );
}
export default App;
