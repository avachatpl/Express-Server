var fs=require('fs-js');

var data = JSON.parse(fs.readFileSync('data.json').toString())

console.log(data);
var jsonFile = require('jsonfile');

data["book3"]={
        "name":"dip",
        "pages":"300",
    };

   // jsonFile.writeFile('data.json',data);     //write from the starting of the file
    jsonFile.writeFileSync('data.json',data);  //write from end of the line
    data["book1"].name="d";
    jsonFile.writeFileSync('data.json',data);  //update a value in json obj
