const user = {
    name: "Default User",
    type: "user",
};

const adminUser = Object.create(user);
adminUser.type = "admin"

const isAdmin = () =>{
  if (Object.getPrototypeOf(obj) === adminUser){
    return true
  } else{
    return false
  }
} 

let obj = Object.create(adminUser)
const x = isAdmin(obj)
console.log(x)
