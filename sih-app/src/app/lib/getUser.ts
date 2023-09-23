export default async function getUser(username:string){
    console.log(username);
    const res= await fetch(`http://localhost:3000/api/userdashboard/userprojects/username?username=${username}`)

    if(!res.ok) throw new Error('failed to fetch user')

    const userData = await res.json(); // Parse the JSON data

  return userData;
}