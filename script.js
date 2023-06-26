function buttonclick (){
    let user = document.getElementById("email");
    let passWord = document.getElementById("pass");
    let pas = document.getElementById("pas");
    let  emailError = document.getElementById("emailerror");
    let  passerror = document.getElementById("passerror");
    


    
    if(user.value == "" || passWord.value == "" ){

     document.getElementById("emailerror").innerText = "Either Email or password is missing." ;


     //alert ("Either Email or password is missing.");
     return false;

    }
    else{
    return true;
    }


}