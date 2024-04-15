import prisma from '../../../lib/connect';
import { NextRequest, NextResponse } from "next/server"
import { request } from 'http';

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

   
    const id = parseInt(userid, 10);

    if (isNaN(id)) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid id provided', userid }),
        { status: 400 }
      );
    }

    const projectData = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    if (!projectData) {

      return new NextResponse(
        JSON.stringify({ message: 'Project not found', id }),
        { status: 404 }
      );
    }


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


    const body = await req.text();


    const requestBody = JSON.parse(body);

    
    if (!requestBody.status) {
      return new NextResponse(
        JSON.stringify({ message: 'Missing or invalid status in the request body' }),
        { status: 400 }
      );
    }


    const updatedProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: {
    
        status: requestBody.status,
        rejectionSummary: requestBody.rejectionSummary 
        
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

