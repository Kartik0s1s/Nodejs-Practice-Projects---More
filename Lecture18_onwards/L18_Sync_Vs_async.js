//Execute each one separately while other is commented out 

const fs= require ('fs');

//Asynchronous way to deal with files
fs.readFile("text/Amir.txt", 'utf-8', (err, data)=>{
    if(err){
         return false ;
    }else{
     console.log(data) 
    }
})
 console.log("Sript executed")

 //Synchronous way to deal with files
 const data =fs.readFileSync("text/Amir.txt", 'utf-8');
 console.log(data);

 console.log('script executed 1 ')