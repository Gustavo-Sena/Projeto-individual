var database = require("../database/config")

function trazer_historico(idUser) {
    var instrucao = `
    SELECT * FROM Historico JOIN Usuario ON fkUsuario = idUsuario 
	JOIN Artistas AS a ON fkArtistaFav = a.idArtista WHERE fkUsuario = '${idUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(idUser, nome_artista) {
    var instrucao = `
    SELECT * FROM Historico JOIN Usuario ON fkUsuario = idUsuario 
	JOIN Artistas AS a ON fkArtistaFav = a.idArtista WHERE fkUsuario = '${idUser}' AND a.nome = '${nome_artista}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    trazer_historico,
    listar
}