/*
//Looping
//For loop
Sum=0
for(var i=0;i<10;i++){
    Sum += i
}
console.log(Sum)

//while
i=0
Sum=0
while(i<10){
    Sum += i
    i++
}
console.log(Sum)

//do...while
i=0
Sum=0
do{
    Sum += i
    i++
}while(i<10)
console.log(Sum)

example1:
arr=[10,20,30] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

example2:
arr=[10,20,20.5] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

example3:
arr=[10,20,true,false] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

example4:
arr=[10,"string",20,"kongu"] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for in loop
arr=[10,"string",20,"kongu"]
for(const index in arr){
    console.log(index)
}

arr=[10,"string",20,"kongu"]
for(const index in arr){
    console.log("The value present in",index,"is",arr[index])
}

//for of loop
arr=[10,"string","kongu",20,true]
for(const value in arr){
    console.log(value)
}
*/

//for Each loop
arr=[10,"string","kongu",20,true]
arr.forEach(value=>{
    console.log(value)
});

examble:
var kongu=new Object()
kongu["Fees"]="100000"
kongu["Accomodation"]="Excellent"
kongu["Food"]="Decent"
kongu["HostelCount"]="10"
console.log(kongu)

//for in eg: => Output = key
for(key in kongu){
    console.log(key,kongu[key])
}

//for each eg:
kongu.forEach((key,element)=>{
    console.log(key,element)
}); //error code