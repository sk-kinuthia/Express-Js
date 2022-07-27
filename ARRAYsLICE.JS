function arraySlice(array,beginIndex,endIndex){
    //if no parameters passed,return the array
    if(! beginIndex && ! endIndex){
        return array;
    }
    //if only beginning index is found,set endIndex to size
    endIndex-array.length;
    var partArray=[];
    //if both begin and end index specified return the part of the array
    for(var i=beginIndex;i<endIndex;i++){
        partArray.push(array[i]);
    }
    return partArray;
}
a=arraySlice([1,2,3,4],1,2);//[2]
b=arraySlice([1,2,3,4],2,4);//[3,4]
console.log(b)
