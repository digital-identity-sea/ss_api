import dotenv from 'dotenv';
dotenv.config();
export function getConfig() {
    const env = process.env;
    return {
        node_env: env.NODE_ENV,
        port: env.PORT,
        encyption_key: env.ENCRYPTION_KEY,
    };
}
