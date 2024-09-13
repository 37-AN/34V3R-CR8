/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:r4VW8EjLIvRa@ep-yellow-voice-a5ow5yiq.us-east-2.aws.neon.tech/neondb?sslmode=require',

    }
  };
  
