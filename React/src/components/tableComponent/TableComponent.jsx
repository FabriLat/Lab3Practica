import { Table } from "react-bootstrap";
const TableComponent = ({netIncomes}) => {
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
export default TableComponent;