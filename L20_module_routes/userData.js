const querystring = require("querystring");

function userData(req, resp) {
  let databody = [];

  req.on("data", (chunk) => {
    databody.push(chunk);
  });

  req.on("end", () => {
    let rawdata = Buffer.concat(databody).toString();
    let readable = querystring.parse(rawdata);

    resp.write("<h1>DATA SUBMITTED</h1>");
    resp.write(`<p>Name: ${readable.Name}</p>`);
    resp.write(`<p>E-mail: ${readable.email}</p>`);
    resp.write("<h1>This is user data</h1>");
    resp.end();
  });
}

module.exports = userData;
