function buscarPersonagem() {
    pers = document.getElementById("personagem").value
    divPers = document.getElementById("divPers")
    divRel = document.getElementById("divRelacoes")
    
    fetch(`https://dp-back.delightfulsand-e112317a.brazilsouth.azurecontainerapps.io/personagem/${pers}`)
        .then(response => response.json())
        .then(data => {
            personagem = data.personagem
            divPers.innerHTML = `
                <h1>Personagem</h1>
                <p> <strong>Nome: </strong> ${personagem.nome}</p>
                <p> <strong>Idade: </strong> ${personagem.idade}</p>
                <p> <strong>Descrição: </strong> ${personagem.descricao}</p>
                <p> <strong>Frase: </strong> ${personagem.frase}</p>
                <p> <strong>Nome do Ator: </strong> ${personagem.nomeAtor}</p>
                <p> <strong>Idade do Ator: </strong> ${personagem.idadeAtor}</p>
            `

            relacoes = data.retornoRelacao

            divRel.innerHTML = "<h1>Relações do Personagem</h1>"
            for(i=0; i < relacoes.length; i++) {
                divRel.innerHTML += `
                    <p> <strong>Nome:</strong> ${relacoes[i].nome}</p>
                    <p> <strong>Tipo de Relação:</strong> ${relacoes[i].tipo_relacionamento}</p>
                `
            }
        })
}


