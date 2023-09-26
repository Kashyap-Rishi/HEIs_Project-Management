import prisma from "@/app/lib/connect";
import { NextResponse } from "next/server";
import {hash} from "bcrypt";
import * as z from 'zod';

//Define schema for input validation

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    institutename: z.string().min(1, 'Institutename is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })





export async function POST(req: Request){
    try{
        const body=await req.json();
const{email,institutename,username,password}= userSchema.parse(body);

//check if email already exists
const existingUserByEmail=await prisma.instituterandom.findUnique({
    where: {email:email}
});
if(existingUserByEmail){
    return NextResponse.json({user: null, message:"Institute with this email already exists"}
    ,{status:409})
}


const existingUserByInstitutename=await prisma.instituterandom.findUnique({
    where: {institutename:institutename, username: ''}
});
if(existingUserByInstitutename){
    return NextResponse.json({user: null, message:"User with this username already exists"}
    ,{status:409})
}

const hashedPassword=await hash(password, 10);
const newUser = await prisma.instituterandom.create({
    data:{
        username,
        institutename,
        email,
        password:hashedPassword
    }
});
const{password:newUserPassword, ...rest}=newUser;

        return NextResponse.json({user:newUser, message:"User created successfully"},{status:201});
    }catch(error){
        console.log(error);
        return new NextResponse(
            JSON.stringify({message:"Something went wrong"}),
            {status:500}
        );
    }
}