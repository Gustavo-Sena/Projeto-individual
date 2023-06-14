var database = require("../database/config")

function votar(escolhaUsuario, idUser) {
    console.log("ACESSEI O INGRESSO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", escolhaUsuario, idUser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Votacao (fkArtista, fkUsuario)
        SELECT idArtista, '${idUser}'
        FROM Artistas
        WHERE nome = '${escolhaUsuario}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidas(idShow) {

    instrucaoSql = `
    SELECT COUNT(fkArtista) AS nm_votos, nome FROM Votacao 
	JOIN Artistas ON fkArtista = idArtista
	GROUP BY fkArtista;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    votar,
    buscarUltimasMedidas
}