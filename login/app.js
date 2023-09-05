const firebaseConfig = {
    apiKey: "AIzaSyA8F9oOOqlxQN84yrRQTYwkuKEEP_lsqRA",
    authDomain: "projeto2miateste-b5c1b.firebaseapp.com",
    projectId: "projeto2miateste-b5c1b",
    storageBucket: "projeto2miateste-b5c1b.appspot.com",
    messagingSenderId: "156225926534",
    appId: "1:156225926534:web:e11da912396602e8502807"
  };
firebase.initializeApp(firebaseConfig);



/*
const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', () =>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("Usuário logado: ", user)
    })
    .catch((error)=>{
        const errorMessage = error.message;
        console.error("Erro de autenticação: ", errorMessage)
    });
});*/