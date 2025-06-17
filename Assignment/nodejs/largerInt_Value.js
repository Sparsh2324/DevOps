const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function getNumberInput(prompt) {
      return new Promise((resolve) => {
          readline.question(prompt, (input) => {
              resolve(parseInt(input));
          });
      });
  }
  
  async function main() {
      const num1 = await getNumberInput("Enter the first integer: ");
      const num2 = await getNumberInput("Enter the second integer: ");
  
      if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid input. Please enter integers.");
          readline.close();
          return;
      }
  
      const larger = Math.max(num1, num2);
      console.log("The larger number is:", larger);
      readline.close();
  }
  
  main();