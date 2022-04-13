
const users = {
   firstName: ["John", "Jane", "Jim", "Kate"] ,
   lastName: ["Doe", "Doe", "Carrey", "Winslet"] ,
   age: [24, 5, 54, 40] ,
   gender: ["male", "female", "male", "female"] 
};

function getUsers() {
  var output = "";
  for (i = 0; i < users.length; i++) {
    console.log(users[i])
  }
}

/*function findUser(lastName, gender) {
  try {
    var user = getUsers();
    var iFindUser;
    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    return "Cannot read property 'firtName' of undefined";
  }
}*/

getUsers();
//findUser("Doe", 5);
//module.exports = getUsers;
