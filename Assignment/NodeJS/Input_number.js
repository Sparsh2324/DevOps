const readline = require('readline').createInterface({
  input: process.stdin,
  output:  process.stdout
});

readline.question('Enter a number:', (input1) => {
  const num1 = parseInt(input1);
  console.log("Number are: ");
  //for(i=1; i<=num1; i++){
 if(num1 % 2 !== 0){
   console.log("Odd Number");
 }else {
   console.log("Even Number");
  }
  readline.close();
});
