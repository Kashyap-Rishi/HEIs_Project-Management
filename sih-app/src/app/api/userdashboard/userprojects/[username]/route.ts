import prisma from '../../../../lib/connect';
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req:NextRequest) => {
  
    const { searchParams } = await new URL(req.url);
    const username = searchParams.get("username")
    
    try {
        if (!username) {
          // Handle the case where the username is not provided
          return new NextResponse(
            JSON.stringify({ message: 'Username is required' }),
            { status: 400 }
          );
        }
    
        // Fetch user data based on the provided username
        const userData = await prisma.userrandom.findUnique({
          where: {
            username: username,
          },
        });

    if (!userData) {
      // Handle the case where the user does not exist
      return new NextResponse(
        JSON.stringify({ message: 'User not found',username }),
        { status: 404 }
      );
    }

    // Return the user data as a JSON response
    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
