let isTrue:boolean = true;
console.log(isTrue);
//using square brackets how to declare an array
let items:string []=['soap','sampoo','biscuit'];
console.log(items);
//using generic type how to declare an array
let arr=[1,2,3,'Arun','kumar',true,false];
console.log(arr);

let name1:Array<string>;
name1=['rahul','prince','mukul'];
console.log(name1);

let demo:(string|number)[]=['Apple',3,'Orange',4,'Grape',6];
demo.push('Bannana');
demo.push(7);
demo.sort();
console.log(demo);
console.log(demo[0]);
for(let index in demo){
    console.log(demo[index]);
}