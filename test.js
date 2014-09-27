var transNum = require('./index');

for(var i = 0;i < 2; i=i+1){
    var num = transNum.next();
    console.log(num +' - '+transNum.num());
    num='0';
    console.log(transNum.num());
}