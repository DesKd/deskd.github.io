function escolherNomeAleatorio() {
    let divres = document.getElementById('res');
    let nome = document.createElement('p');

    if (!Array.isArray(nomes) || nomes.length === 0) {
        throw new Error("O array 'nomes' não está definido ou está vazio.");
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    //let nomeAleatorio = nomes[indiceAleatorio];

    while(divres.firstChild) {
        divres.removeChild(divres.firstChild)
    } 

    nome.innerText = nomes[indiceAleatorio];
    divres.appendChild(nome);
    
}
