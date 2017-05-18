var os = require('os');
var path = require("path");

//OS Module
//Returns the hostname of the operating system.
console.log(os.hostname());
//Returns the operating system's default directory for temp files.
console.log(os.tmpdir());
//Returns the operating system name.
console.log(os.type());

//Path Module
// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
// Resolve
console.log('resolve : ' + path.resolve('main.js'));
// extName
console.log('ext name : ' + path.extname('main.js'));