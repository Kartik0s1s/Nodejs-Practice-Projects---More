const fs = require("fs");

// below code  is to perform crud opearations with terminal commands

const opearation = process.argv[2];


//Create
// give command nodemon crud.js write samp  "This is sample text file "
if (opearation == "write") {
  const name = process.argv[3];
  const content = process.argv[4];
  console.log(opearation, name, content);
  const fileName = "files/" + name + ".txt";
  fs.writeFileSync(fileName, content);
} 

//Read
// give command nodemon crud.js read filename 
else if (opearation == "read") {
  console.log("Inside read ");
  const name = process.argv[3];
  const fileName = "files/" + name + ".txt";
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(data);
} 

//Update
// give command nodemon crud.js filename " This is Added data "
else if (opearation == "update") {
  const name = process.argv[3];
  const content = process.argv[4];
  console.log(name, content);
  const fileName = "files/" + name + ".txt";
  fs.appendFileSync(fileName, content);
} 

//Delete
// give command nodemon crud.js delete filename 
else if (opearation == "delete") {
  const name = process.argv[3];
  console.log(name);
  const fileName = "files/" + name + ".txt";
  fs.unlinkSync(fileName);
}



// Below code are handling crud opearations with fs modue

// //Create
// fs.writeFileSync("files/Banana1.txt", "This is banana");

// //Read
// const data = fs.readFileSync("files/Banana1.txt", "utf-8");
// console.log(data);

// //update
// fs.appendFileSync("files/Banana1.txt", "and this is good for health ");

// //Delete
// //fs.unlinkSync("files/apple.txt")
