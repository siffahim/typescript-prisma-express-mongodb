import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  ip_address: process.env.IP_ADDRESS,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    expire_in: process.env.JWT_EXPIRE_IN,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    refresh_expire_in: process.env.JWT_REFRESH_EXPIRE_IN,
  },
};
