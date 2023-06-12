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

function gerar_media() {
    var instrucao = `
    SELECT TRUNCATE(AVG(somaTempoMedio),0) AS mediaTempoMedio
    FROM (
    SELECT SUM(a.tempoMedio) AS somaTempoMedio
    FROM HistoricoShow hs
    JOIN Artistas a ON hs.fkShowFav = a.idArtista
    GROUP BY hs.fkUsuario
    ) subquery;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    gerar_tempo,
    gerar_media
}