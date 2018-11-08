//Declaration Section
var pswInput = document.getElementById('password');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');
var emailInput = document.getElementById('email');
var nameInput = document.getElementById('fullName');
var adressInput = document.getElementById('adress');
var form = document.getElementById('myForm');
//Name Validation function 
function validName() {
    var validNameFormat=/[a-zA-Z]+[' '][a-zA-Z]/
      if (nameInput.value.match(validNameFormat)) {
          document.getElementById("nameAlert").style.display ="none";
        return true; 

      } else {
          document.getElementById("nameAlert").style.display ="block";
        return false;
      }
    }
//Adress Validation function
    function validAdress() {
      if(adressInput.value.length>8) {
          document.getElementById('adressAlert').style.display="none";
        return true; 
      }
      else{
          document.getElementById('adressAlert').style.display="block";
        return false; 
    }}
//Password Validation function
function validPsw(){
    var validPswFormat=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,8}/
    if (pswInput.value.match(validPswFormat)){
      return true;
    }else{
      return false;
    }
  }
  //Email Validation function 
  function validEmail() {
    var validEmailFormat=/[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]/
      if (emailInput.value.match(validEmailFormat)){
        document.getElementById('emailAlert').style.display="none";
        return true;
      } else {
        document.getElementById('emailAlert').style.display="block";
        return false;
        }
    }
  
//Message diplay box on click
pswInput.onfocus = function(){
    document.getElementById('message').style.display="block";
}
//Message display box on blur
pswInput.onblur = function(){
    document.getElementById('message').style.display="none";
}
//Message Box display
pswInput.onkeyup = function() {
    var lowerCaseLetters=/[a-z]/;
    if (pswInput.value.match(lowerCaseLetters)){
        letter.classList.remove('invalidpsw');
        letter.classList.add('validpsw');
    }
    else{
        letter.classList.remove('validpsw');
        letter.classList.add('invalidpsw');
    }
    var upperCaseLetters=/[A-Z]/;
    if(pswInput.value.match(upperCaseLetters)){
        capital.classList.remove('invalidpsw');
        capital.classList.add('validpsw');
    }
    else{
        capital.classList.remove('validpsw');
        capital.classList.add('invalidpsw');
    }
    var Numbers=/[0-9]/;
    if(pswInput.value.match(Numbers)){
        number.classList.remove('invalidpsw');
        number.classList.add('validpsw')
    }
    else{
        number.classList.remove('validpsw');
        number.classList.add('invalidpsw');
    }
    if(pswInput.value.length<=8){
        length.classList.remove('invalidpsw');
        length.classList.add('validpsw');
    }
    else {
        length.classList.remove('validpsww');
        length.classList.add('invalidpsw')
    }
}

function validForm() {
    var Name=validName();
    var Email=validEmail();
    var Password=validPsw();
    var Adress=validAdress();
    if (Name&&Adress&&Email&&Password) {
        document.getElementById("alertDone").style.display="block";
    }else{
        document.getElementById("alertDone").style.display="none";   
    }
}
function Reset(){
    return document.getElementById("alertDone").style.display="none";
}
