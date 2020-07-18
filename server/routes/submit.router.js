const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
    
//Post Route
router.post( '/', ( req, res )=>{
    console.log( "in submit post route:", req.body );
    const query = `INSERT INTO "feedback" ( feeling, understanding, support, comments ) VALUES ( $1, $2, $3, $4 )`;
    const values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ];
    pool.query( query, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( 'ERROR with INSERT:', err );
        res.sendStatus( 500 );
    })
   }) //end POST route


module.exports = router;