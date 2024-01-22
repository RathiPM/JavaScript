/*
//SET
//1st eg:
setExample=new Set("aiadmk","bjp","congress")
console.log(setExample)

setExample=new Set(["aiadmk","bjp","congress"])
setExample.add("dmk")
setExample.add("aiadmk")

//for in loop = no output
setExample=new Set(["aiadmk","bjp","congress"])
setExample.add("dmk")
setExample.add("aiadmk")
for(key in setExample){
    console.log(key)
}
//for of loop = output print
setExample=new Set(["aiadmk","bjp","congress"])
setExample.add("dmk")
setExample.add("aiadmk")
for(value of setExample){
    console.log(value)
}


//Maps
mapEg = new Map([
    ["id","21ECR164"],
    ["name","rathi"],
])
console.log(mapEg)

//for of loop
for(value of mapEg){
    console.log(value)
}

//for in loop
mapEg = new Map([
    ["id","21ECR164"],
    ["name","rathi"],
])
for(key in mapEg){
    console.log(key)
}
console.log(mapEg.has("name"))
*/
mapEg = new Map([
    ["id","21ECR164"],
    ["name","rathi"],
])
mapEg.set("age","20") 
mapEg.set("phone number","9342337190")
mapEg.delete("name")
mapEg.delete("id")
console.log(mapEg)