import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
        "616132242970-jigdv5a3qk3u2caef6lq0198sq50i17d.apps.googleusercontent.com",
      clientSecret:
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ||
        "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",
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }: any) {
      return `${baseUrl}/app`;
    },
  },
};

export default NextAuth(authOptions);
