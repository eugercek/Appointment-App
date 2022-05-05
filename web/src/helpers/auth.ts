import {User} from "../components/Home/Login"

async function loginUser(user:User ) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   }, body: JSON.stringify(user)
 })
   .then(data => data.json())
}

export default loginUser