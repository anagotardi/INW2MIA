function createEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

   firebaseauh.auth().createUserWithEmailAndPassword(email,password)
   .then(user => {
     alert('Usuário', user);
     alert('Usuário criado e logado');

   });
   .catch(err=> {
     console.error("erro ao criar usário", err);
   })
}