var fs = require("fs");

fs.writeFile('input.txt', 'Welcome to Node JS File System', function(error){
    if(error){
        return console.log("Error Occured");
    }

    fs.readFile('input.txt', function(error, data){
        if(error){
            return console.log("Error Occured");
        }

        console.log(data.toString());
    })
});