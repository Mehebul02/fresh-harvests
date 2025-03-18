import { NextAuthOptions } from "next-auth"
import FacebookProvider from "next-auth/providers/face";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
    pages:{
     signIn:'/login'
    },
    secret:process.env.AUTH_SECRET
}

