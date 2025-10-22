const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const newNums = [];

numbers.forEach(number => {
  newNums.push(number + 1);
});

console.log(newNums);
// Risultato: [3, 9, 5, 8, 3, 88]