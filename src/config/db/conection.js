export const config = {
    db: {
        host: process.env.DB || 'localhost',
        user: 'root',
        password: process.env.PSWD || '',
        database: 'my_database'
    }
};