var fs = require("fs");

var obj = {
    "book1":{
        "name":"c",
        "pages":"229",
    },
     "book2":{
        "name":"unix",
        "pages":"529",
    },
   
};

fs.writeFileSync('data.json', JSON.stringify(obj));