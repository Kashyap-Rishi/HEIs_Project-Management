export default async function getAllProject(id:number){
    
    const res= await fetch(`http://localhost:3000/api/singleprojects/id?id=${id}`,{
cache:"no-store"
    })
    if(!res.ok) throw new Error('failed to fetch user')

    const singleProject = await res.json(); // Parse the JSON data
   


  return singleProject;
}