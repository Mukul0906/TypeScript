interface calc{
    subtract(x:number,y:number):number;
}
let calculate:calc={
    subtract(a:number,b:number):number{return a-b;}
}
console.log(calculate.subtract(20,10));