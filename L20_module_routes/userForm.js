function userForm( req, resp){
   resp.write(`
    <form action ="/submit" method="Post">
 <input type="text" Placeholder="Enter name" name="Name"/>
 <input type="text" Placeholder="Enter e-mail" name="email"/>
 <button>Submit</button>
 </form>
    `)
}
module.exports = userForm;