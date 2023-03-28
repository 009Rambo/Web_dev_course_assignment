require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database!');
});

app.get('/items', (req, res) => {
    connection.query('SELECT * FROM owned_object ORDER BY name, info', (err, rows) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Error executing query' });
        }
        res.json(rows);
    });
});

app.get('/acquisitions', (req, res) => {
    connection.query(`
        SELECT person.name AS owner_name, owned_object.name AS item, owned_object.info
        FROM acquisition
        JOIN person ON person.id = acquisition.owner
        JOIN owned_object ON owned_object.id = acquisition.item
    `, (err, rows) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Error executing query' });
        }
        res.json(rows);
    });
});

app.get('/latest4', (req, res) => {
    connection.query(`
        SELECT person.name AS owner_name, owned_object.name AS item, owned_object.info
        FROM acquisition
        JOIN person ON person.id = acquisition.owner
        JOIN owned_object ON owned_object.id = acquisition.item
        ORDER BY acquisition_datetime DESC
        LIMIT 4
    `, (err, rows) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Error executing query' });
        }
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
