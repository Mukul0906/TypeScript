//Tuples
//Tuple can contain two values of different data types
var empName:[number,string]=[1,"Arun"];
//A tuple type variable can include multiple data types
var demo1:[number,string,boolean,any]=[1,"Mukul Kumar",true,123];
demo1.push(2,"ARVIND",true,4523);
console.log(demo1);

//Union
let code:(string|number);
code=123;
code="Isha bansal";
//code = true; throws compile time error
