// var test1='chicken,noodle,soup,broth';
// test1.split("");
// console.log(test1)
// a="Wizard of OZ".replace("Wizard","Witch");
// console.log(a)
// var str="Javascript DataStructures";
// var n=str.search(/DataStructures/);
// console.log(n);
var DICTIONARY='abcdefghijklmnopqrstuvwsxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');{
function encodeId(num){
    
var base=DICTIONARY.length;
var encoded='';
if(num===0){
    return DICTIONARY[0];
}
while(num>0){
    encoded+=DICTIONARY[(num % base)]
    num=Math.floor(num/base);
}
    return reverseWord(encoded);
}
function reverseWord(str){
    var reversed="";
    for (var i=str.length-1;i>=0;i--){
        reversed+=str.charAt(i);
    }
    return reversed;
}
function decode(id){
    var base=DICTIONARY.length;
    var decode=0;
  for (var index=0;index<id.split("").length;
  index++){
    decoded=decoded*base+  DICTIONARY.
    indexOf(id.charAt(index));

  }  
  return decode;
}
console.log(encodeId(11231230));
console.log(decodeId('VhU2'))