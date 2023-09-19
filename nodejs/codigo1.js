const parImpar = (numero) => {
    if(numero<0){
        console.log(numero+" é um número é negativo.")
    }
    else if(numero==0){
        console.log(numero+" é um número é neutro.")
    }
    else if((numero%2==0)){ //"%2==0" está entre parênteses pois está sendo realizado um cálculo
        console.log(numero+" é um número é par.")
    }
    else{
        console.log(numero+" é um número ímpar")
    }
}

parImpar(40);
parImpar(0);
parImpar(13);
parImpar(-1000)
