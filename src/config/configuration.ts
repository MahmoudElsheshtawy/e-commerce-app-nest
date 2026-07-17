
export default () => ({
    port: parseInt(process.env.PORT as string) || 3000,
    database: {

        url: process.env.DATABASE_URL,
    },
    jwt:{
        accessSecret: process.env.JWT_ACCESS_SECRET,
    }
    // mail:{
    //     user: process.env.USER_MAIL,
    //     pass: process.env.USER_PASSWORD,
    //     host: process.env.HOST,
    //     port: parseInt(process.env.MAIL_PORT as string) || 587,
    //     secure: false,
    // }
    // 3s:{

    // }
    
});