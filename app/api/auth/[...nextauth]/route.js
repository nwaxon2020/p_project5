import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import FaceBook from "next-auth/providers/facebook"

const autOpions = {
    providers:[
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        FaceBook({
            clientId: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
        })

    ],

    session:{
        strategy: "jwt",
        maxAge: 30 *24 *60* 60
    },

    secret: process.env.NEXTAUTH_SECRET,

    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.image = user.image
            }

            return token
        },

        async session({session, token}){
            if(token.id){
                session.id = token.id
                session.name = token.name
                session.email = token.email
                session.image = token.image
            }

            return session
        }
    }
}

const handler = NextAuth(autOpions)
export {handler as GET, handler as POST}