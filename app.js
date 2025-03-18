// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Creamos un array vacío para almacenar los nombres de los amigos

function agregarAmigo(){ // Implementamos la función para agregar los nombres de los amigos
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre válido");
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();


}

function actualizarLista(){ // Implementamos la función para actualizar la lista de amigos
    const listaAmigoUl = document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {  // Implementamos la función para sortear los amigos
    if (amigos.length === 0) {
        alert("No hay nombres para sortear. Por favor agregar un nombre.");
        return
    }
const indiceAleatorio = Math.floor(Math.random() * amigos.length);

const amigoSorteado = amigos[indiceAleatorio];
    
const resultadoUl = document.getElementById("resultado");
resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("btnAdicionar").addEventListener("click",agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click",sortearAmigo);
})
