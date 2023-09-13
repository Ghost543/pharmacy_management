import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
});

const env_ = envSchema.safeParse(process.env);

if (!env_.success) {
    console.error(
        "Invalid environment variables:",
        JSON.stringify(env_.error.format(), null, 4)
    );
    process.exit(1);
}

export const env = env_.data;
