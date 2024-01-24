/*
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
*/

//Callbacks
//Form Submission Example
function submitForm(buttonClick,db){
    setTimeout(function(){
        console.log(buttonClick)
        db()
    },2000)

}
function database(){
    console.log("Form Submitted Successfully")
}
submitForm("Form Submit button clicked",database)
