var fallingTime = function (h) {
var g = 9.8

var t =  Math.sqrt(2*h/g);
var v = g * t;


return t;

};


var distanceFallen = function(time) {
var g = 9.8
 var d =  (g * Math.pow(time,2))/2
 return d;

};


module.exports = {
	"fallingTime": fallingTime,
	"distanceFallen": distanceFallen
};