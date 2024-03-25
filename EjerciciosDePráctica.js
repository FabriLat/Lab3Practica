let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

const names = input.map((person) => person.name);
console.log(names);

const namesByAge = input
  .filter((person) => person.age < 29 && person.age > 20)
  .map((person) => {
    return { Person: person.name };
  });
console.log(namesByAge);

let countries = [
  { name: "Argentina", population: 458100000 },
  { name: "Brazil", population: 456 },
  { name: "Peru", population: 789 },
  { name: "Bolivia", population: 123 },
];

countries = countries.sort(
  (country1, country2) => country2.population - country1.population
);

console.log(countries);

const candles = [4, 4, 1, 3];
let maxCandle = Math.max(...candles);
maxCandle = candles.filter((n) => n == maxCandle).length;
console.log(maxCandle);

const min = 3;
const studients = [2, 0, 3, -1, 5, -2];
let goodStudents = studients.filter((student) => student <= 0);
goodStudents.length < 3 ? console.log("NO") : console.log("YES");
