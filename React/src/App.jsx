import "./App.css";
import TableComponent from "./components/tableComponent/TableComponent";

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


  return (
    <div>
      <TableComponent netIncomes={netIncomes}/>
      <p>Promedio de ingresos: {average}</p>
    </div>
  );
}
export default App;
