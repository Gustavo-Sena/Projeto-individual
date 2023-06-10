var database = require("../database/config")

function trazer_historico(idUser) {
    var instrucao = `
    SELECT * FROM HistoricoShow JOIN Usuario ON fkUsuario = idUsuario 
	JOIN Artistas AS a ON fkShowFav = a.idArtista WHERE fkUsuario = '${idUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function procurarShow(nome_artista) {
    var instrucao = ` 
    SELECT * FROM Artistas AS a  
    WHERE a.nome = '${nome_artista}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addShow(idUser, nome_artista) {
    var instrucao = ` 
    INSERT INTO HistoricoShow (fkShowFav, fkUsuario)
    SELECT idArtista, '${idUser}'
    FROM Artistas 
    WHERE nome = '${nome_artista}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    trazer_historico,
    procurarShow,
    addShow
}