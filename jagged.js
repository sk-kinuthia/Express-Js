function Matrix(rows,columns){
    var jaggedarray=new Array(rows);
    for(var i=0;i<columns;i+=1){
        jaggedarray[i]=new Array(rows);
    }
    return jaggedarray;
}
Array=Matrix(Matrix(3,3))
console.log(Array)