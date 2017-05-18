

var CheckEvent = function(num, callback){
    if(num%2 == 0){
        callback('even', num);
    }
    else{
        callback('odd', num);
    }
}

var logEvent = function(status, num){
    console.log(num + ' is ' + status);
}

var count = 0;

console.log('Call back funtion loop started');

for(var i=0; i<10; i++){
    CheckEvent(i, logEvent);
}

