module.exports = function reverse (n) {
let abs = Math.abs(n);
let str =  abs.toString();
let arr = str.split("");
var prepareResult = arr.reverse();
let result = prepareResult.join(""); 
return result;
}
