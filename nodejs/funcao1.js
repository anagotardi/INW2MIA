//criação da função normal
function escreverNoConsole(){
    console.log("Primeiro exemplo - Função normal")
}

//chamar a função para executar
escreverNoConsole();

//variação de função normal ou declarada
const escreverNoConsoleVariacao = function(){
    console.log('Segundo Exemplo - Variação do modo normal')
}

//chamar a função para executar
escreverNoConsoleVariacao()

//arrow function - função seta ou flecha
//toda a arrow function usa os caracteres = junto com >
const escreveComArrow = ()=>{
    console.log('Terceiro Exemplo -Arrow function') //o return é opcional
}

//chamar a função para executar
escreveComArrow()

//arrow function => com parâmetro
const escreveComArrowParametro = (texto) => {
    console.log(texto);
} //se tiver apenas um parâmetro pode ser omitido as chaves {}

//chamar a função para executar
escreveComArrowParametro('Quarto exemplo, usando parâmetro')
escreveComArrow()
escreveComArrowParametro('Outro texto')

//função arrow que soma dois valores
const somarDois = (numero1, numero2) =>{
    console.log('A soma é: '+(numero1+numero2))
}

//chamar a função para executar
console.log("---------------------") 
somarDois(10,10)

//variação arrow function sem parenteses e sem chaves
const varianteArrow = texto => console.log(texto)


