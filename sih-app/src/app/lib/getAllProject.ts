import prisma from '../lib/connect';
export default async function getAllProject(id:number){
    
    const res= await fetch(`http://localhost:3000/api/singleprojects/id?id=${id}`,{
cache:"no-store"
    })
    if(!res.ok) throw new Error('failed to fetch user')

    const singleProject = await res.json(); // Parse the JSON data
   


  return singleProject;
}

export async function updateProjectStatus(id: number, newStatus: string) {
  try {
    // Update the project status using Prisma
    const updatedProject = await prisma.project.update({
      where: { id: id },
      data: { status: newStatus },
    });

    console.log('Project status updated:', updatedProject);

    return updatedProject;
  } catch (error) {
    console.error('Error updating project status:', error);
    throw error;
  } finally {
    await prisma.$disconnect(); // Disconnect from the database when done
  }
}
