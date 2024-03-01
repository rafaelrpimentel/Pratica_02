const readline = require("readline-sync")

const Contato = require("./modelo")

const contatos = [novoContatox]

function adicionarContato(){
    const nome = readline.question("Entre com o nome: ");
    const email = readline.question("Entre com o email: ");
    const telefone = readline.question("Entre com o telefone: ");
    const novoContato = {nome, email, telefone};
    contatos.push(novoContato)
}

function listarContatos(){
    contatos.forEach((contato) => console.log(contato.toString()));
}

function buscarContato(nome){
    const nome = readline.question("Entre com o nome do produto: ");
    const buscar = contato.find(contato => contato.nome === nome);
    if (buscar) {
        console.log(buscar.toString());
    } else {
        console.log("Contato não localizado");
    }
}

function atualizarContato(nome, email, telefone){
    const contato = buscarContato (nome)
    const buscar = produtos.find(contato => contato.nome === nome);
    if (buscar) {
        const nome = readline.question("Entre com o novo nome: ");
        buscar.nome = nome; 
        const email = readline.question("Entre com o novo email: ");
        buscar.email = email; 
        const telefone = readline.question("Entre com o novo telefone: ");
        buscar.telefone = telefone; 
    } else {
        console.log("Contato não localizado");
    }
}

function removerContato(){
    const nome = readline.question("Entre com o nome do contato: ");
    const posicao = produtos.findIndex(contato => contato.nome === nome);
    if (posicao >= 0) {
        produtos.splice(posição, 1);
    } else {
        console.log("Contato não localizado")
    }
}

module.export = {criar, listar, buscar, atualizar, remover};