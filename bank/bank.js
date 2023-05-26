class Conta{

    constructor(numero, cpf, saldo, ativo){
    
    this.numero = numero,
    
    this.cpf = cpf,
    
    this.saldo = saldo,
    
    this.ativo = ativo;
    
    }
    
    
    
    ativar(){
    
    this.ativo = true
    
    }
    
    credito(valor){
    if(this.ativo){
    
    if(valor<0){
    
    console.log("Impossível realizar valor negativo...")
    
    }
    
    else if(valor == 0){
    
    console.log("Impossível realizar valor zerado...")
    
    }
    
    else{
    
    this.saldo = this.saldo + valor
    
    }
    
    }
    
    else{
    
    console.log("Conta está inativa...")
    
    }
    
    }
    
    debito(valor){
    
    if(this.ativo){
    
    if(valor<0){
    
    console.log("Impossível realizar valor negativo...")
    
    }
    
    else if(valor == 0){
    
    console.log("Impossível realizar valor zerado...")
    
    }
    
    else if(this.saldo<valor){
    
    console.log("Saldo insuficiente...")
    
    }
    
    else{
    
    this.saldo = this.saldo - valor
    
    }
    
    }
    
    else{
    
    console.log("Conta está inativa...")
    
    }
    
    }
    
    }
    
    
    
    class Poupança extends Conta {
    
    constructor(numero, cpf, saldo, ativo, diaAniversarioPoupanca){
    
    super(numero, cpf, saldo, ativo);
    
    this.diaAniversarioPoupanca = diaAniversarioPoupanca
    
    }
    
    
    
    correcao(dia){
    
    if(this.diaAniversarioPoupanca == dia){
    
    this.saldo = (this.saldo*0.05) + this.saldo
    
    console.log("Parabéns!! Hoje é o aniversário da sua conta, que tal um bônus!!!")
    
    console.log("Seu saldo atualizado após o bônus: "+this.saldo)
    
    }
    
    else {
    
    console.log("Infelizmente hoje não é o aniversário da sua conta...na próxima quem sabe!")
    
    }
    
    }
    
    }
    
    
    
    class Corrente extends Conta {
    
    constructor(numero, cpf, saldo, ativo, contadorTalao){
    
    super(numero, cpf, saldo, ativo);
    
    this.contadorTalao = contadorTalao 
    }
    
    
    
    pedirTalao(quantidade){
    
    if(quantidade>this.contadorTalao){ 
    console.log("Impossível realizar, quantidade indisponível...")
    
    }
    
    else if((quantidade*30)>this.saldo){
    
    console.log("Impossível realizar, saldo indisponível...")
    
    }
    
    else{
    
    console.log("Emitindo Talão...")
    
    this.contadorTalao = this.contadorTalao - quantidade
    
    this.debito(quantidade*30)
    
    }
    
    
    
    console.log("Talões atuais disponíveis: "+this.contadorTalao)
    
    
    
    console.log("Saldo atual da conta R$: "+this.saldo)
    
    }
    
    }
    
    
    
    class Especial extends Conta {
    
    constructor(numero, cpf, saldo, ativo, limite){
    
    super(numero, cpf, saldo, ativo);
    
    this.limite = limite
    
    }
    
    
    
    usarLimite(valor){
    
    if(-valor>this.limite){ 
    
    console.log("Impossível realizar, limite indisponível...")
    
    }
    
    else{
    
    this.limite = this.limite + valor 
    
    this.credito(-valor) 
    
    }
    
    
    
    console.log("Limite atual R$: "+this.limite)
    
    }
    
    }
    
    
    
    const leia = require("prompt-sync")() 
    let op= "" 
    
    do {
    
    
    
    console.log("BANK")
    
    console.log("BEM VINDO/A AO BANCO FEVASGO!!!\n")
    
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")
    
    console.log("1- CONTA POUPANÇA ")
    
    console.log("2- CONTA CORRENTE")
    
    console.log("3- CONTA ESPECIAL")
    
    console.log("4- SAIR")
    
    op = leia("Digite o número da sua opção: ")
    
    
    
    if(op == "1"){
    
    
    
    console.log("BANK")
    
    console.log("BEM VINDO/A AO BANCO FEVASGO!!! \n")
    
    console.log("ESTA É A CONTA POUPANÇA!\n")
    
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")
    
    let numero = leia("Digite o número da conta: ")
    
    let cpf = leia("Digite o CPF da conta: ")
    
    let diaAniversarioPoupanca = leia("Digite o dia de aniversário da conta: ")
    
    
    
    let cp1 = new Poupança(numero, cpf, 0, false, diaAniversarioPoupanca)
    
    
    
    cp1.ativar()
    
    
    for(let x=1; x<=10; x++){
    
    console.log("Movimento "+x)
    
    valor = parseInt(leia("DIgite o valor: "))
    
    opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase()
    
    if(opcao == "C"){
    
    cp1.credito(valor)
    
    }
    
    else if(opcao == "D"){
    
    cp1.debito(valor)
    
    }
    
    console.log("Saldo atual da conta R$: "+cp1.saldo)
    
    }
    
    
    
    let dia = leia("Digite o DIA de hoje: ")
    
    cp1.correcao(dia) 
    
    }
    
    
    
    else if(op == "2"){
    
    
    
    console.log("BANK")
    
    console.log("O BANCO DO 2MIA: \n")
    
    console.log("BEM VINDO/A AO BANCO FEVASGO!!!\n")
    
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")
    
    let numero = leia("Digite o número da conta: ")
    
    let cpf = leia("Digite o CPF da conta: ")
    
    
    
    let cc1 = new Corrente(numero, cpf, 0, false, 3)
    
    
    
    cc1.ativar()
    
    
    
    for(let x=1; x<=10; x++){
    
    console.log("Movimento "+x)
    
    valor = parseInt(leia("Digite o valor: "))
    
    opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase()
    
    if(opcao == "C"){
    
    cc1.credito(valor)
    
    }
    
    else if(opcao == "D"){
    
    cc1.debito(valor)
    
    }
    
    console.log("Saldo atual da conta R$: "+cc1.saldo)
    
    }
    
    escolha = leia("Você deseja pedir um talão? Digite S para SIM e N para NÃO: ").toUpperCase()
    
    if(escolha == "S"){
    
    quantidade = parseInt(leia("Digite a quantidade de talões desejados: "))
    
    cc1.pedirTalao(quantidade) 
    
    }
    
    else{
    
    console.log("Fim do programa...até breve!")
    
    }
    
    }
    
    
    
    else if(op == "3"){
    
    
    
    console.log("BANK")
    
    console.log("BEM VINDO/A AO BANCO FEVASGO!!! \n")
    
    console.log("ESTA É A CONTA ESPECIAL!\n")
    
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")
    
    let numero = leia("Digite o número da conta: ")
    
    let cpf = leia("Digite o CPF da conta: ")
    
    
    
    let ce1 = new Especial(numero, cpf, 0, false, 1000)
    
    
    
    ce1.ativar()
    
    for(let x=1; x<=10; x++){
    
    console.log("Movimento "+x)
    
    valor = parseInt(leia("Digite o valor: "))
    
    opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase()
    
    if(opcao == "C"){
    
    ce1.credito(valor)
    
    }
    
    else if(opcao == "D"){ 
    
    if((ce1.saldo-valor) < 0){ 
    escolha = leia("Esse débito deixará sua conta negativa, você deseja usar seu limite? Digite S para SIM e N para NÃO: ").toUpperCase()
    
    if(escolha == "S"){
    
    ce1.usarLimite(ce1.saldo-valor) 
    
    ce1.debito(valor) 
    }
    
    else{
    
    console.log("Não é possível realizar a operação, pois sua conta ficará negativada.") 
    }
    
    } else {
    
    ce1.debito(valor)
    }
    
    }
    
    console.log("Saldo atual da conta R$: "+ce1.saldo)
    
    }
    
    }
    
    
    
    else if(op == "4"){
    
    console.log("Saindo do programa...")
    
    }
    
    
    else{
    
    console.log("Digitação inválida...")
    
    }
    
    }
    
    
    
    while (op != "4") 
    console.log("Fim de programa...até breve!")