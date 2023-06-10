var database = require("../database/config")

function gerar_tempo(idUser) {
    var instrucao = `
    SELECT SUM(tempoMedio) AS somaTempoMedio
    FROM HistoricoShow JOIN Artistas ON fkShowFav = idArtista
    WHERE fkUsuario = '${idUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    gerar_tempo
}