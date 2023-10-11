import prisma from '../../../lib/connect';
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  const { searchParams } = await new URL(req.url);
  const userid = searchParams.get("id"); // Corrected: pass "id" as the argument

  try {
    if (!userid) {
    
      // Handle the case where the id is not provided
      return new NextResponse(
        JSON.stringify({ message: 'Product id is not provided' }),
        { status: 400 }
      );
    }

    // Convert the userid to a number if needed
    const id = parseInt(userid, 10);

    // Check if the converted id is a valid number
    if (isNaN(id)) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid id provided', userid }),
        { status: 400 }
      );
    }

    // Fetch project data based on the id
    const projectData = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    if (!projectData) {
      // Handle the case where the project does not exist
      return new NextResponse(
        JSON.stringify({ message: 'Project not found', id }),
        { status: 404 }
      );
    }

    // Return the project data as a JSON response
    return new NextResponse(JSON.stringify(projectData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  const { searchParams } = await new URL(req.url);
  const projectId = searchParams.get("id");

  try {
    if (!projectId) {
      return new NextResponse(
        JSON.stringify({ message: 'Project id is not provided' }),
        { status: 400 }
      );
    }

    const id = parseInt(projectId, 10);

    if (isNaN(id)) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid id provided', id }),
        { status: 400 }
      );
    }

    // Read the request body as a stream
    const body = await req.text();

    // Parse the body as JSON
    const requestBody = JSON.parse(body);

    // Ensure the request body contains the 'status' property
    if (!requestBody.status) {
      return new NextResponse(
        JSON.stringify({ message: 'Missing or invalid status in the request body' }),
        { status: 400 }
      );
    }

    // Update the project status in the database using Prisma
    const updatedProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: {
        status: requestBody.status, // Assuming 'status' is a field in the 'project' table
      },
    });

    return new NextResponse(JSON.stringify(updatedProject), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

