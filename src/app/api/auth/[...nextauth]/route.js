import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        // ...add more providers here
    ],

    callbacks: {
        async jwt({ token, account }) {
            // Store access_token in JWT after sign-in
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Expose accessToken to the client
            session.accessToken = token.accessToken
            return session
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }