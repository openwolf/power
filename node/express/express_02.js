const express = require('express');
const app = express();
app.get('/:id/:n',(req,res)=>{
    res.send('id:' + req.params['id'] + ',' + 'n:' + req.params['n']);
});
app.listen(3000);