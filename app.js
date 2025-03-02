//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//criando a variavel amigo como uma lista vazia 
let amigos = [];  //  armazenará os nomes dos amigos inseridos.


//funcao para adicionar amigos
function adicionarAmigo (){
    let nome = document.querySelector('input').value; //obter texto inserido pelo usuario.
    if (nome == ''){    //validando se o campo esta vazio.
        alert ('Por favor, insira um nome'); // um alerta com a mensagem de erro caso esteja vazio.
    } else amigos.push(nome); // adicionar o nome digitado a lista de amigos.
    atualizarListaAmigos () // Atualizar a lista exibida no HTML
    limparCampo(); //limpa a caixinha para digitar novo nome. 
    
}

//funcao para limpar o campo onde digitamos os nomes. 
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

//funcao para percorrer lista amigos e adicionar cada nome como um elemento <li> dentro de uma lista HTML

function atualizarListaAmigos (){
    let lista = document.getElementById ('listaAmigos'); //selecionando a lista onde os amigos serão exibidos.
    lista.innerHTML = ''; // limpar a lista antes de adicionar novos elementos

    amigos.forEach( function (amigo) { // percorrer a lista amigos
        let novoItem = document.createElement("li"); // criar elementos li
        novoItem.textContent = amigo; // colocando o nome do amigo como texto dentro do elemento <li>.
        lista.appendChild(novoItem); //adiciona cada novo item ao final da lista, fazendo com que o nome de cada amigo apareça em uma linha separada.
    })
}

// function para selecionar aleatoriamente um amigo
function sortearAmigo(){
    if (amigos.length == 0) { //validando se o campo esta vazio.
        alert ('A lista de amigos esta vazia' ); // um alerta com a mensagem de erro caso esteja vazio.
    }
    let indiceAleatorio = Math.floor ( (Math.random() * amigos.length )); // gerar o indice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obter o nome sorteado
    let resultado = document.getElementById ('resultado'); //selecionando onde resultado sera exibido
    resultado.innerHTML = 'Amigo Sorteado: ' + amigoSorteado // mostrar o nome sorteado

}
