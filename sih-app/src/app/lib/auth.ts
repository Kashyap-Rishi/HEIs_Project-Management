import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import connect from './connect';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(connect),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/studentlogin',
    
  },
  providers: [
    CredentialsProvider({
      name: "StudentCredentials", 
      credentials: {
        username: { label: "username", type: "username", placeholder: "student@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials2) {
        if (!credentials2?.username || !credentials2?.password) {
          return null;
        }
console.log("studentcalled");
        try {

          const existingStudent = await connect.user.findUnique({
            where: { username: credentials2?.username }
          });

          if (!existingStudent) {
            console.error("Student not found");
            return null;
          }

          const passwordMatch = await compare(credentials2.password, existingStudent.password);

          if (!passwordMatch) {
            console.error("Password does not match");
            return null;
          }

          const user = {
            id: `${existingStudent.id}`,
            username: existingStudent.username,
            email: existingStudent.email,

          };

          return user;
        } catch (error) {
          console.error("Error during student authorization:", error);
          return null;
        }
      }
    }),












//     CredentialsProvider({
//       name: "InstituteCredentials",
//       credentials: {
//         username: { label: "Username", type: "username", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials?.username || !credentials?.password) {
//           return null;
//         }
// console.log("institutecalled");
//         try {
//           const existingUser = await connect.instituterandom.findUnique({
//             where: { username: credentials?.username }
//           });

//           if (!existingUser) {
//             console.error("User not found");
//             return null;
//           }

//           const passwordMatch = await compare(credentials.password, existingUser.password);

//           if (!passwordMatch) {
//             console.error("Password does not match");
//             return null;
//           }

//           const user = {
//             id: `${existingUser.id}`,
//             username: existingUser.username,
//             email: existingUser.email,
//             institutename:existingUser.institutename
//           };

   

//           return user;
//         } catch (error) {
//           console.error("Error during authorization:", error);
//           return null;
//         }
//       }
//     }),














//     CredentialsProvider({
//       name: "StudentCredentials", 
//       credentials: {
//         username: { label: "username", type: "username", placeholder: "student@example.com" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials2) {
//         if (!credentials2?.username || !credentials2?.password) {
//           return null;
//         }
// console.log("studentcalled");
//         try {

//           const existingStudent = await connect.userrandom.findUnique({
//             where: { email: credentials2?.username }
//           });

//           if (!existingStudent) {
//             console.error("Student not found");
//             return null;
//           }

//           const passwordMatch = await compare(credentials2.password, existingStudent.password);

//           if (!passwordMatch) {
//             console.error("Password does not match");
//             return null;
//           }

//           const user = {
//             id: `${existingStudent.id}`,
//             username: existingStudent.username,
//             email: existingStudent.email,

//           };

//           return user;
//         } catch (error) {
//           console.error("Error during student authorization:", error);
//           return null;
//         }
//       }
//     })
  ]
}
