//ES6
//1.var,let,const => refer variable.js

//2.arrow function
var fun=() =>{
    console.log("Hello")
}
fun()

//3.Destructing 
var arr=[10,20,30,40,50]
var [a,b,c,d,e]=arr //no bracket => undefined
console.log(a,b,c,d,e)

//4.Spread Operator
var arr=[10,20,30,40]
var arr1=[...arr,70,80]
console.log(arr1)

//5.callback
//6.promise
//7.asyncAwait