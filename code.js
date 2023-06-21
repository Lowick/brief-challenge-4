let email = document.getElementById('mail');
let bouton = document.getElementById('button');


bouton.addEventListener('click',function() {
    console.log("Coucou")
    //Afficher le contenu de l'input email
    console.log(email.value)

    const emailValue = email.value;

    //Mettre en place une condition pour appliquer un style d'erreur sur l'input email 
    //classList.add
    if(emailValue === "" || emailValue === " " || emailValue === "sfsvddfdfdfd"){
        emailValue.classList.add.identifiant;
    }
    
    console.log(emailValue);

});

 console.log(button);

















// Fonction pour valider l'adresse e-mail
// email.addEventListener.addEventListener('click', validerEmail() {
//   let inputEmail = document.getElementById("mail");
//   let email = inputEmail.value;
//   let regexEmail = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
  
//   if (regexEmail.test(email)) {
//     // L'adresse e-mail est valide, réinitialiser la couleur de bordure
//     inputEmail.style.border = "1px solid #ccc";
//   } else {
//     // L'adresse e-mail est invalide, modifier la couleur de bordure
//     inputEmail.style.border = "1px solid red";
//   }
// })







// setCustomValidity(message)