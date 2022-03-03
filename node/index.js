const express = require('express');
const app = express();
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.listen(port, () => {
    createTableIfNotExists()

    console.log('Rodando na porta ' + port)
})

app.get('/', async (_, res) => {
    createNewRecord()

    const selectSql = `SELECT * FROM people`;
    connection.query(selectSql, function (err, result, fields) {
        if (err) throw err;

        const title = '<h1>Full Cycle Rocks!</h1>';
        const list = `
            <ul>
              ${result.map(p => `<li>${p.name}</li>`).join('')}
            </ul>
        `;

        res.send(title + list);
    });
});

function createNewRecord() {
    connection.query('INSERT INTO people (name) values ("Foo Bar User")');
}
function createTableIfNotExists() {
    const createSql = `
        CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));
    `;
    connection.query(createSql);
}
