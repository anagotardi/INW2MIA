class Biquini{
    constructor(id, descricao,ativo,estoque,preco,cor,colecao){
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo,
        this.estoque = estoque,
        this.preco = preco,
        this.cor = cor,
        this.colecao = colecao
    }

    ativar(){
        if(this.ativo == false){
            this.ativo = true;
            console.log("Produto cadastrado!")
        } else {
            console.log("O produto já está cadastrado.")
        }
    }

    retirarEstoque(quantidade){
        if(this.ativo == true){
            if((this.estoque - quantidade) >= 0){
                this.estoque -= quantidade;
                console.log(`Compra realizada com sucesso! valor à pagar: R$${(this.preco * quantidade)}. Ainda têm ${this.estoque} produto(s) no estoque...`);
            } else {
                console.log("Não foi possível realizar sua compra. Produtos insuficientes no estoque... sentimos muito.");
            }
        } else {
            console.log("Produto não cadastrado.");
        }
    }

    incluirEstoque(quantidade){
        if(this.ativo == true){
            if(quantidade > 10){
                console.log("Não é possível adicionar mais do que 10 itens")
            } else {
                this.estoque += quantidade;
                console.log(`Produtos adicionados! Há ${this.estoque} produtos no estoque`);
            }
        } else {
            console.log("Não foi possível realizar a compra.")
        }
    }
}

function fazerCompras(){
    console.log("CADASTRO INICIAL DO PRODUTO")
    let id = parseInt(leia("Insira o id do produto: "));
    let descricao = leia("Insira a descrição do produto: ");
    let preco = parseFloat(leia("Insira o preço do produto: "));
    let cor = leia("Insira a cor do produto: ");
    let colecao = leia("Insira a coleção do produto: ");

    const p1 = new Biquini(id, descricao, false, 10, preco, cor, colecao);
    p1.ativar();

    for(i = 1; i <= 5; i++){
        console.log(`Venda ${i}`);
        console.log(p1);
        let quantidade = parseInt(leia("Quantos produtos você deseja comprar?"));
        p1.retirarEstoque(quantidade);
    }
   
    let quantidade = parseInt(leia("Quantos produtos gostaria de adicionar ao estoque? "));
    p1.incluirEstoque(quantidade);

    let quer = leia("Gostaria de continuar?Digite S para 'sim' ou N para 'não' ").toUpperCase();
    if(quer == "S"){
        fazerCompras();
    } else {
        console.log("Até breve!!!")
    }
}

const leia = require('prompt-sync')();

let quer = leia("Gostaria de fazer compras? Digite S para 'sim' ou N para 'não' ").toUpperCase();
if(quer == "S"){
    fazerCompras();
} else {
    console.log("Até breve!!!")
}