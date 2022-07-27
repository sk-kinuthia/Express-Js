// function ExampleClass(name,size){
//     this.name=name;
//     this.size=size;
// }
// var example=new ExampleClass("Public",5);
// console.log(example);//{name:"Public",size:5}


function ExampleClass(name,size){
    var privateName=name;
    var privateSize=size;
    this.getName=function(){
        return privateName;
    }
    this.setname=function(name){privateName=name;}
    this.getSize=function(){return privateSize;}
    this.setSize=function(size){privateSize=size;}
}
var example=new ExampleClass("Sammie",3);
example.setSize(12);
console.log(example.privateName)
