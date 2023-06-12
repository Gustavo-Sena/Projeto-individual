var database = require("../database/config");

function buscarUltimasMedidas(idShow) {

    instrucaoSql = `SELECT a.nome AS nome_show, COUNT(*) AS quantidade_visualizacoes
    FROM HistoricoShow 
    JOIN Artistas a ON fkShowFav = a.idArtista
    GROUP BY a.nome
    ORDER BY quantidade_visualizacoes DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2(idArtista) {

    instrucaoSql = `SELECT a.nome, COUNT(*) AS curtidas
    FROM HistoricoArtista 
    JOIN Artistas a ON fkArtistaFav = a.idArtista
    GROUP BY a.idArtista, a.nome
    ORDER BY curtidas DESC;`     

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas2
}
