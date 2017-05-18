var request = require('request');
var fs = require('fs');
var data = '';

// Version 1:  Pipe HTML to standard out
var s = request('https://www.google.co.in');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

//request stream on data eventemitter
s.on('data', function(html) {
    data = html;
    // Write the data to stream with encoding to be utf8
    writerStream.write(data,'UTF8');    
    // Mark the end of file
    writerStream.end();
});

//request stream on end eventemitter
s.on('end', function() {
    console.log("Request Completed");
});

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

//s.pipe(process.stdout);
