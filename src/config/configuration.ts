
export default () => ({
    port: parseInt(process.env.PORT as string) || 3000,
    database: {

        url: process.env.DATABASE_URL,
    }
    
});