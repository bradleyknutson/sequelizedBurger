const connection = require('./connection');

const orm = {
    selectAll: (table, callback) => {
        let query = `SELECT * FROM ??`;
        connection.query(query, [table], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },
    insertOne: (table, cols, vals, callback) => {
        let query = `INSERT INTO ??(??) VALUES(?)`;
        connection.query(query, [table, cols, vals], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },
    updateOne: (table, col, val, conditionCol, conditionVal, callback) => {
        let query = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        connection.query(query, [table, col, val, conditionCol, conditionVal], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },
    deleteOne: (table, conditionCol, conditionVal, callback) => {
        let query = `DELETE FROM ?? WHERE ?? = ?`;
        connection.query(query, [table, conditionCol, conditionVal], (err, result) => {
            if(err) throw err;
            callback(result);
        });    
    }
}

module.exports = orm;