//The scope is bydefault global
var Name='Srijal';
function sayName(){
    var marks=100;
    console.log("My Name is : ",Name);
}
sayName();
//console.log(marks);//This shows error coz marks is assigned inside a block.

var x=10;//this is global. So x=10 is assigned to window object.
{
    var x=1;//this change x=1 in window object .
    console.log(x);//prints 1
}
console.log(x);//Therefore this will also prints 1 as x=1 in window's properties