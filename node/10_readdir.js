const fs = require('fs');
fs.readdir(__dirname,(err,files)=>{
    if(err) {
        throw err;
    }else {
        console.log(files);
    }

});