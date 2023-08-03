const messageMotDePasse = "Veuillez entrer un mot de passe valide minimum de 8 caractères.";
const messageMail = "Veuillez entrer une adresse email valide.";
const messageMotDePasseVide = "Veuillez entrer un mot de passe.";
const messageMailVide = "Veuillez entrer une adresse mail.";



let email = document.getElementById('mail');
let bouton = document.getElementById('button');
let motDePasse = document.getElementById('password');
let emailAlert = document.getElementById('emailAlert');
let passwordAlert = document.getElementById('passwordAlert');

bouton.addEventListener('click', identify);
email.addEventListener('input',function(){normalize(email);normalizeAlert(emailAlert);});
motDePasse.addEventListener('input',function(){normalize(motDePasse);normalizeAlert(passwordAlert);});

function identify(){
  if(email.value==""){
    // email Vide
    emailAlert.innerHTML = messageMailVide;
    email.style = "outline : 2px solid red;";
  }
  if(motDePasse.value==""){
    // Password vide
    passwordAlert.innerHTML = messageMotDePasseVide;
    motDePasse.style = "outline : 2px solid red;";
  }

  if( email.value.length>0 && motDePasse.value.length>0 && !testEmail() && !testMotDePasse()){
    // Email et Mot de passe erronés
    emailAlert.innerHTML = messageMail;
    passwordAlert.innerHTML = messageMotDePasse; 
  }else if(email.value.length>0 && !testEmail()){
    // Email erroné
    emailAlert.innerHTML = messageMail;
  }else if(motDePasse.value.length>0 && !testMotDePasse()){
    // Mot de passe erroné
    passwordAlert.innerHTML = messageMotDePasse;
  }
}
function testEmail(){
  if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g)){
    email.style = "outline : 2px solid red;";
    return false;
  }else{
    return true;
  }
}
function testMotDePasse(){
  if(motDePasse.value.length<8){
    motDePasse.style = "outline : 2px solid red;";
    return false;
  }else{
    return true;
  }
}
function normalize(item){
  item.style = "outline: none;";
}
function normalizeAlert(item){
  item.innerHTML = "";
}


 
 


















