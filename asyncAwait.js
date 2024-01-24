/*
//async Dummy eg 
async function asAw(){
    var promise = new Promise(
        function(response){
            setTimeout(function(){
                response("Example of async/Await");
            },1000)
        });
        console.log(await promise);
}
asAw()
*/

//Kind of our own Instagram

async function commentCode(){
    return new Promise(
       function(commentValue){
        setTimeout(function(){
            commentValue("This is my 1st post comment icon") 
        },1000);
    });
}
async function likeCode(){
    return new Promise(
        function(likeValue){
            setTimeout(function(){
                likeValue("This is my 1st post like icon") 
            },1000)
        });
}
async function post(){
    var post = new Promise(
        function(postresponse){
            setTimeout(function(){
                postresponse("This is my 1st post"); 
            },1000);
        });
        var[feed,comment,like]=await Promise.all([post, commentCode(), likeCode()])
        console.log(feed);
        console.log(comment);
        console.log(like);
}
post()