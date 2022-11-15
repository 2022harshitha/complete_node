// const fs = require('fs/promises')

// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// }

// const myFileReader = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// }


// const myFileUpdater = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// }

// const myFileDeleter = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// }



// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
const fs = require("fs");

fs.writeFile("create.text","today i have one on one mentorship",(err)=>
{
   console.log("file is created");
   console.log(err);
});

fs.appendFile("create.text"," and it will all be good 100%",(err)=>
{
	console.log("file updated");
	console.log(err);
});

fs.readFile("create.text","utf-8",(err,data)=>
{
	console.log(data);
})

fs.unlink("create.txt",(err)=>{
	console.log("file deleted");
})