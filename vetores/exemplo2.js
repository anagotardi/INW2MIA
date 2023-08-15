const leia = require("prompt-sync")()

//variáveis
let cod = ["C1","C2","C3"]
let descricao  = ["Calça", "Camisa", "Saia"]
let valor = [100.00, 60.50, 200.25]
let estoque = [0,0,0]
let movimento = [0,0,0]
let opcaoMenuPrincipal = ""
let opcaoSubMenu = ""
let codAux = ""
let posicao = -1

//programa principaçl
while(opcaoMenuPrincipal != "2"){ //enquanto o número digitado for diferente de 2, o código repete
    //MENU PRINCIPAL
    console.log("LOJA XXX\n\n")
    console.log("MENU PRINCIPAL")
    console.log("1 - Opções")
    console.log("2 - Sair")
    opcaoMenuPrincipal = leia("Digite o número da sua opção: ")

    if(opcaoMenuPrincipal == 1){ //quando o número digitado for 1, mostrar as opções
        opcaoSubMenu = ""

        //SUB-MENU
        while(opcaoSubMenu != "6"){
            console.log("SUB-MENU")
            console.log("1 - MOSTRAR OS REGISTROS")
            console.log("2 - ALTERAR OS RESGISTROS")
            console.log("3 - CADASTRAR OS REGISTROS")
            console.log("4 - EXCLUIR UM REGISTRO")
            console.log("5 - CARRINHO DE COMPRAS")
            console.log("6 - SAIR")
            opcaoSubMenu = leia("Digite o número da sua opção: ")
            if(opcaoSubMenu == "1"){
                console.log("COD\tDESCRIÇÃO\tVALOR\tESTOQUE")
                for(let x = 0; x<cod.length; x++){
                    console.log(cod[x]+"\t"+descricao[x]+"\t\t"+valor[x]+"\t"+estoque[x])
                }
            }
            else if(opcaoSubMenu){
                auxCod = leia("Digite o código do produto que deseja alterar: ").toUpperCase
                for(let x=0; x<cod.length; x++){
                    if(auxCod == cod[x]){
                        posicao = x
                    }
                }
                if(posicao == -1){
                    console.log("Produto não encontrado...")
                }
                else{
                    cod(posicao)=leia("Digite o novo código: ");
                    descricao(posicao)=(leia("Digite a nova descrição: "));
                    valor(posicao)=parseFloat(leia("Digite o novo preço: "));
                    estoque(posicao)=parseInt(leia("Digite o novo preço: "))
                }
            }
        }
    
    }
}



//fim do programa
console.log("Até breve!")