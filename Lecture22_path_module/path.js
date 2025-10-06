const path = require('path');
const file = "text/peter.txt";



// these are path modules
console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.resolve("text","peter.txt"));



// these are global constants
console.log(__dirname);
console.log(__filename);

