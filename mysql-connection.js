
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: DATABASE
});
// promise for creating a MySQL connection
const connectMySQL = new Promise((resolve, reject) => {
    connection.connect((err) => {
        if (err) throw err;
        resolve('MySQL connected successfully');
    })
});

module.exports = {
    connection,
    connectMySQL
}