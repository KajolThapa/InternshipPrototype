module.exports = {
    'oracledb': {
        user: process.env.USER || 'system',
        password: process.env.PASSWORD || 'Unicorn18',
        connectString: process.env.CONNECTSTRING ||'localhost/xe'

    }

}