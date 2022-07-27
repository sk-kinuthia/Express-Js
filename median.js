function medianOfArray(array){
    var length=array.length;
    if (length % 2==1){
        return array[Math.floor(length/2)];
    }
    else{
        return(array[length/2]+array[length/2-1])/2;
    }
}
a=function medianOfSortedArray(arr1,arr2,pos){
    
}