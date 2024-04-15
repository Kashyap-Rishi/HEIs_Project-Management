export default async function getInstituteUsers(institutename:string){
    
    const res= await fetch(`http://localhost:3000/api/instituteusers/institutename?institutename=${institutename}`)

    if(!res.ok) throw new Error('failed to fetch user')

    const userData = await res.json(); // Parse the JSON data

  return userData;
}