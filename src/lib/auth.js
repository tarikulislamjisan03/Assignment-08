import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: { 
    enabled: true, 
  },
     socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
  // account: {
  //   accountLinking: {
  //     enabled: true,
  //     trustedProviders: ["google"]
  //   }
  // },
  // database: mongodbAdapter(db, {
  //   client
  // }),
});