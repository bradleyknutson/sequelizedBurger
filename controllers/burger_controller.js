const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((result) => {
        res.render('index', {burgers: result});
    });
});

router.post('/api/burgers/create', (req, res) => {
    burger.insertOne(`burger_name`, req.body.burgerName, (result) => {
        res.status(200).end();
    });
});

router.put('/api/burgers/:id', (req, res) => {
    if(req.params.id){
        burger.updateOne('devoured', true, 'id', req.params.id, (result) => {
            if(result.changedRows === 0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        });
    }else{
        return res.status(404).end();
    }
});

router.delete('/api/burgers/:id', (req, res) => {
    if(req.params.id){
        burger.deleteOne('id', req.params.id, (result) => {
            if(result.affectedRows === 0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        });
    }else{
        return res.status(404).end();
    }
    
});

module.exports = router;