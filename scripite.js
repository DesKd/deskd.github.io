import nomes1 from './names.json' with {type: 'json'};

window.chamarNome = function () {
    let divres = document.getElementById('res');
    let nome = document.createElement('p');

    if (!Array.isArray(nomes1) || nomes1.length === 0) {
        throw new Error("O array 'nomes' não está definido ou está vazio.");
    }

    const indiceAleatorio = Math.round(Math.random() * nomes1.length);
    //let nomeAleatorio = nomes[indiceAleatorio];

    while(divres.firstChild) {
        divres.removeChild(divres.firstChild)
    } 

    nome.innerText = nomes1[indiceAleatorio];
    divres.appendChild(nome);
    
}
