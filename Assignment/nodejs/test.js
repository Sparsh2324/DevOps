function printEvenIndexValues(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (i % 2 === 1) {
        console.log(`Index : ${arr[i]}`);
      }
    }
}
  
  // Example usage
  const numbers = ["Mango", "Banana", "orange", "Chikoo", "Grapes", "Ananas"];
  printEvenIndexValues(numbers);
  // Output:
  // Index 0: 10
  // Index 2: 30
  // Index 4: 50