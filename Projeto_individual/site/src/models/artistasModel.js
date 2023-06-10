var database = require("../database/config")

function trazer_artistas(idUser) {
    var instrucao = `
    SELECT * FROM HistoricoArtista JOIN Usuario ON fkUsuario = idUsuario 
	JOIN Artistas AS a ON fkArtistaFav = a.idArtista WHERE fkUsuario = '${idUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function procurarArtistas(nome_artista) {
    var instrucao = ` 
    SELECT * FROM Artistas AS a  
    WHERE a.nome = '${nome_artista}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addArtista(idUser, nome_artista) {
    var instrucao = ` 
    INSERT INTO HistoricoArtista (fkArtistaFav, fkUsuario)
    SELECT idArtista, '${idUser}'
    FROM Artistas 
    WHERE nome = '${nome_artista}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    trazer_artistas,
    procurarArtistas,
    addArtista
}