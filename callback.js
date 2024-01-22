//callback
function RamuSomu(welcomeMessage,callback){
    setTimeout(function(){
        console.log(welcomeMessage)
        callback();
    },2000)

}
function miniani(){
    console.log("Odi poiru vanthudatha da thambi!!!!")
}

RamuSomu("Hello RamuSomu\nWelcome to KEC",miniani)