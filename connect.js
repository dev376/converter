const mysql = require('mysql2/promise');
const g = require('../db/config.json')
var pool;

let sqlconnect = {
    host: g.host,
    user: g.user,
    password: g.password,
    database: g.database
}

const connect = () => {
    try {
        pool = mysql.createPool(sqlconnect);
    } catch (error) {
        console.error("Connection Pool Error : ", error);
    }
}

/**
 * Executes SQL query and returns data.
 * @constructor
 * @param {string} queryText - SQL query string
 * @param {boolean} singleRecord - single record
 */
const query = async function (queryText, singleRecord) {
    const [results] = await pool.query(queryText);
    console.log(results);
    if (Array.isArray(results)) {
        const finalResults = [];
        const resultsLength = results.length;
        for (let index = 0; index < resultsLength; index++) {
            finalResults.push({ ...results[index] });
        }
        // For single record
        if (typeof (singleRecord) == "boolean" && singleRecord) return finalResults[0];
        // For multiple records
        return finalResults;
    }
    return results;
};

/**
 * shim for formatting the query
 */
var format = mysql.format;

/**
 * escaping the data
 */
var escape = mysql.escape;

connect();

module.exports = {
    query,
    format,
    escape
};