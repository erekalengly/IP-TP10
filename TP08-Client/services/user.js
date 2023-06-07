var db = require('../db/db');

const login = async (email, password) => {
  // to check in db if the user is existed
  let isChecked = false;
  let allUsers = await db.getAllUsers();

  allUsers.forEach( user => {
    let useremail = user.email;
    let userpassword = user.password;
    
    if (useremail=== email&& userpassword=== password){
       isChecked = true;
    }
  });

  return isChecked // true/false
}

const register = (newUser) => {

  // check email duplication
  // check data validation
  // save to database

  db.addNewUser(newUser);
}

module.exports = {
  login,
  register
}