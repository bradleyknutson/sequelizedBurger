const orm = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll('burgers', (res) =>{
            callback(res);
        });
    },
    insertOne: (col, val, callback) => {
        orm.insertOne('burgers', col, val, (res) => {
            callback(res);
        });
    },
    updateOne: (col, val, conditionCol, conditionVal, callback) => {
        orm.updateOne('burgers', col, val, conditionCol, conditionVal, (res) => {
            callback(res);
        });
    },
    deleteOne: (conditionCol, conditionVal, callback) => {
        orm.deleteOne('burgers', conditionCol, conditionVal, (res) => {
            callback(res);
        });
    }
}

module.exports = burger;