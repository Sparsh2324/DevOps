const readline = require("readline").createInterface({
  input:process.stdin,
  output:process.stdout
});

readline.question("Enter a name:", (input1) => {
  const name1 = parseFloat(input1);
    console.log(input1);
    readline.close();
});