import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@rafushe/db";
import * as schema from "@rafushe/db/schema/auth";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",

		schema: schema,
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: false,
	},
  socialProviders: {
    roblox: {
      clientId: process.env.ROBLOX_CLIENT_ID as string,
      clientSecret: process.env.ROBLOX_CLIENT_SECRET as string,
    }
  },
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
});
