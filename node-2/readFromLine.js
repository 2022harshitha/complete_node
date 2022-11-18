const readline = require("readline");
const interface = readline.createInterface(process.stdin,process.stdout)
interface.question("Please enter your name: ",yourName=>{
    console.log(`Hello ${yourName}`);
    interface.close()
})