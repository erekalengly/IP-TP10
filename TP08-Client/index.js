const express = require('express')
var bodyParser = require('body-parser');
const userService = require('./services/user');
const app = express()
app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/login', function (req, res) {
  const { email, password } = req.body;

  let check_user =  userService.login(email, password);
  check_user.then( data => {
    if (data)
      res.json({
        "success": true
      })
    else
      res.json({
        "success": false
      })
  })

})

app.post('/register', function (req, res) {
  const { 
    email, 
    username,
    firstname,
    lastname,
    password,
  } = req.body;
  const data = { email, username, firstname, lastname, password };
  userService.register(data);
  const ress = {
    success : true,
    data
  }
  res.json(ress)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});