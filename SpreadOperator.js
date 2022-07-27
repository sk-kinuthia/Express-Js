// function addFourNums(a,b,c,d){
//     return a+b+c+d;

// }
// var numbers=[1,2,3,4]
// console.log(addFourNums(...numbers))
var array1=[1,2,3,4,5]
function findSum(arr,weight){
    for (var j=i+1;j<arrLength;j++){
        for (var j=i+1;j<arrLength;j++){
            if(arr[i]+arr[j]==weight){
                return [i,j];
            }
        }
    }
    return-1
}
sum=findSum(2,4)
console.log(sum)
