'use strict';
var counter = 0;
var currNum = 0;

if(!Date.prototype.format){
    Date.prototype.format = function (format) {
        var formatStrs = {
            'M+': this.getMonth() + 1, //month
            'd+': this.getDate(), //day
            'h+': this.getHours(), //hour
            'm+': this.getMinutes(), //minute
            's+': this.getSeconds(), //second
            'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
            'S': this.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (var str in formatStrs)
            if (new RegExp('(' + str + ')').test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? formatStrs[str] : ('00' + formatStrs[str]).substr(('' + formatStrs[str]).length));
        return format;
    };
}

function TransNum(){
}
TransNum.prototype.next = function(){
    counter++;
    var c = '0000000'+counter;
    currNum = new Date().format('yyyyMMddhhmmss')+ c.substr(-8);
    return currNum;
};
TransNum.prototype.num = function(){
    return currNum;
};


module.exports = new TransNum;