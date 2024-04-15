export default async function getProject(studentName:string){
    
    const res= await fetch(`http://localhost:3000/api/allprojects/studentName?studentName=${studentName}`,{
cache:"no-store"
    })
    if(!res.ok) throw new Error('failed to fetch user')

    const userProjects = await res.json(); // Parse the JSON data
   


  return userProjects;
}