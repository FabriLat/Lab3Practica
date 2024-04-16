import "./App.css";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const average = (netIncomes.reduce(
    (accumulator, currentValue) => accumulator + currentValue.income,0
  )/3).toFixed(2);

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            {netIncomes.map((name, index) => (
              <th key={index}>
                Nombre: {name.brand} Ingreso neto: {name.income} ||
              </th>
            ))}
          </tr>
        </thead>
      </table>
    );
  };

  return (
    <div>
      <Table />
      <p>Promedio de ingresos: {average}</p>
    </div>
  );
}

export default App;
