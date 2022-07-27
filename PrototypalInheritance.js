// function ExampleClass(){
//     this.name="Javascript";
//     this.sayName=function(){
//         console.log(this.name);
//     }
// }
// var example1=new ExampleClass();
// example1.sayName();

function ExampleClass(){
    this.array=[1,2,3,4,5];
    this.name="Javascript";
}
//new object
var example1=new ExampleClass();
ExampleClass.prototype.sayName=function(){
    console.log(this.name);
}
example1.sayName();  
