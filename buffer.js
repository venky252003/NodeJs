var b = new Buffer('Hello');

var buffer2 = new Buffer(3);

//Copy one Buffer to Other Buffer
b.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

console.log(b.toString());

//Convert to base64 encode
console.log(b.toString('base64'));

var v = new Buffer('World').toString('base64');

//Reading from Buffers 
console.log(b.toString('utf-8',0,2));

//Convert Buffer to JSON
console.log(b.toJSON());

//Compare Buffer
var com_buffer1 = new Buffer('ABC');
var com_buffer2 = new Buffer('ABCD');
var result = com_buffer1.compare(com_buffer2);

if(result < 0) {
   console.log(com_buffer1 +" comes before " + com_buffer2);
}else if(result == 0){
   console.log(com_buffer1 +" is same as " + com_buffer2);
}else {
   console.log(com_buffer1 +" comes after " + com_buffer2);
}