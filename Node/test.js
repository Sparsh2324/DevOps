function sumArray(arr) {
    // Ensure all elements are numbers
    const sum = arr.reduce((total, num) => {
      return total + (typeof num === 'number' ? num : 0);
    }, 0);
  
    console.log("Sum of array elements:", sum);
  }
  
  // Example usage
  const numbers = [10, 20, 30, 40]; // You can replace this with any array
  sumArray(numbers);