import {User, UserRole} from "../types/Login"


async function loginUser(user:User ){

  console.log(user)
  if(user.role === UserRole.Manager){
    return "ManagerFreeToken";
  }

  console.log(`http://localhost:8080/${user.role}s/login`);
  const response = await fetch(`http://localhost:8080/${user.role}s/login`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   }, body: JSON.stringify(user)
 })

 if(response.status === 200){
   const text = await response.text();
   console.log(text)
   return text;
 }
 else{
   return "error";
 }
}

export default loginUser