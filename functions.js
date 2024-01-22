//Functions
//eg1 
function fun(){
    console.log("Function Sample example")
}
fun()

function fun(a,b){
    console.log("Function with Argument and without return type")
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("Number is even",i)
        }
        else{
            console.log("The number is odd",i)
        }
    }
}
fun(5,10)

function fun(a,b){
    return a,b
}
console.log("Function with Argument and without return type")
fun()
{
    var a=5
    var b=10
}
console.log(fun(a))