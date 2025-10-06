  function userForm(req, resp) {
   resp.writeHead(200,{"Content-Type":"text/html"})
  resp.write(`
    <form action="/submit" method="POST">
      <input type="text" placeholder="Enter name" name="Name"/>
      <input type="text" placeholder="Enter e-mail" name="email"/>
      <button>Submit</button>
    </form>
  `);
  resp.end();
}
module.exports = userForm;
