CREATE DATABASE atomica;
USE atomica;
DROP DATABASE atomica;

CREATE TABLE DadosPessoais
	(idDados INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    sobrenome VARCHAR(50),
    CPF CHAR(11),
    RG CHAR(7),
	fkConta INT, FOREIGN KEY (fkConta) REFERENCES Usuario(idUsuario));
    
    SELECT * FROM DadosPessoais;
    SELECT * FROM Usuario;
    
CREATE TABLE Usuario
	(idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50),
    senha VARCHAR(50));

CREATE TABLE Palco
	(idPalco INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45));
    
INSERT INTO Palco VALUES
	(NULL, 'Champions'),
    (NULL, 'Midnight'),
    (NULL, 'Starlight'),
    (NULL, 'Young Blood');

CREATE TABLE Artistas
	(idArtista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dataShow DATE,
    tempoMedio INT,
    fkPalco INT,
    CONSTRAINT fkPalco FOREIGN KEY (fkPalco)
		REFERENCES Palco (idPalco));
        
INSERT INTO Artistas VALUES
	-- PALCO CHAMPIONS
	(NULL,'Taylor Swift', '2023-09-02', 120, 1),
    (NULL,'Paramore', '2023-09-02', 90, 1),
    (NULL,'Eminem', '2023-09-02', 90, 1),
    (NULL,'Cage the Elephant', '2023-09-03', 120, 1),
    (NULL,'NF', '2023-09-03', 90, 1),
    (NULL,'Ava Max', '2023-09-03', 90, 1),
    (NULL,'Avril Lavigne', '2023-09-07', 120, 1),
    (NULL,'Imagine Dragons', '2023-09-07', 90, 1),
    (NULL,'Lorde', '2023-09-07', 90, 1),
    (NULL,'Muse', '2023-09-08', 120, 1),
    (NULL,'Evanescence', '2023-09-08', 90, 1),
    (NULL,'Green Day', '2023-09-08', 90, 1),
    (NULL,'Kaleo', '2023-09-09', 120, 1),
    (NULL,'Pitty', '2023-09-09', 90, 1),
    (NULL,'Rise Against', '2023-09-09', 90, 1),
    -- PALCO MIDNIGHT
    (NULL,'Miley Cyrus', '2023-09-02', 120, 2),
    (NULL,'Nothing But Thieves', '2023-09-02', 90, 2),
    (NULL,'Thirdy Seconds to Mars', '2023-09-02', 90, 2),
    (NULL,'Maneskin','2023-09-03', 90, 2),
    (NULL,'Falling In Reverse', '2023-09-03', 90, 2),
    (NULL,'Luísa Sonza', '2023-09-03', 90, 2),
    (NULL,'Kendrick Lamar', '2023-09-07', 120, 2),
    (NULL,'Rammstein', '2023-09-07', 90, 2),
    (NULL,'Anitta', '2023-09-07', 90, 2),
    (NULL,'Ariana Grande', '2023-09-08', 120, 2),
    (NULL,'Halestorm', '2023-09-08', 90, 2),
    (NULL,'Camila Cabello', '2023-09-08', 90, 2),
    (NULL,'Avenged Sevenfold', '2023-09-09', 120, 2),
    (NULL,'Blackpink', '2023-09-09', 90, 2),
    (NULL,'Slipknot', '2023-09-09', 90, 2),
    -- PALCO STARLIGHT
    (NULL,'Chainsmokers', '2023-09-02', 120, 3),
    (NULL,'Daft Punk', '2023-09-02', 90, 3),
    (NULL,'Skrillex', '2023-09-02', 90, 3),
    (NULL,'Clean Bandit', '2023-09-03', 120, 3),
    (NULL,'Hatsune Miku', '2023-09-03', 90, 3),
    (NULL,'David Guetta', '2023-09-03', 90, 3),
    (NULL,'Tiësto', '2023-09-07', 120, 3),
    (NULL,'Alok', '2023-09-07', 90, 3),
    (NULL,'Marshmello', '2023-09-07', 90, 3),
    (NULL,'Martin Garrix', '2023-09-08', 120, 3),
    (NULL,'Alan Walker', '2023-09-08', 90, 3),
    (NULL,'Swedish House Mafia', '2023-09-08', 90, 3),
    (NULL,'Calvin Harris', '2023-09-09', 120, 3),
    (NULL,'Zedd', '2023-09-09', 90, 3),
    (NULL,"Gigi D'agostino", '2023-09-09', 90, 3),
    -- PALCO YOUNG BLOOD
    (NULL,'Lindsey Stirling', '2023-09-02', 120, 4),
    (NULL,'Hundred Reasons', '2023-09-02', 90, 4),
    (NULL,'Vince Staples', '2023-09-02', 90, 4),
    (NULL,'Cobra Ramone', '2023-09-03', 120, 4),
    (NULL,'Palaye Royale', '2023-09-03', 90, 4),
    (NULL,'Jill Andrews', '2023-09-03', 90, 4),
    (NULL,'Against The Current', '2023-09-07', 120, 4),
    (NULL,'Meiko', '2023-09-07', 90, 4),
    (NULL,'Fresno', '2023-09-07', 90, 4),
    (NULL,'The Blue Stones', '2023-09-08', 120, 4),
    (NULL,'Ecliptyka', '2023-09-08', 90, 4),
    (NULL,'Mike Oldfield', '2023-09-08', 90, 4),
    (NULL,'Dreamcatcher', '2023-09-09', 120, 4),
    (NULL,'Miss May I', '2023-09-09', 90, 4),
    (NULL,'I See Stars', '2023-09-09', 90, 4);
    
INSERT INTO Artistas VALUES
	(NULL, 'Bullet For My Valentine', NULL, NULL, NULL),
    (NULL, 'Motionless In White', NULL, NULL, NULL),
    (NULL, 'Bring Me The Horizon', NULL, NULL, NULL),
    (NULL, 'Nelly Furtado', NULL, NULL, NULL);

seleCT * from artistas;
CREATE TABLE HistoricoShow
    (fkShowFav INT,
    fkUsuario INT,
    idHistorico INT AUTO_INCREMENT,
	CONSTRAINT fkShowFav FOREIGN KEY (fkShowFav)
		REFERENCES Artistas (idArtista),
	CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario)
		REFERENCES Usuario (idUsuario),
	CONSTRAINT pkHistorico PRIMARY KEY (idHistorico));
    
CREATE TABLE HistoricoArtista
	(fkArtistaFav INT,
    fkUsuario INT,
    idHistorico INT AUTO_INCREMENT,
    CONSTRAINT fkArtistaFav FOREIGN KEY (fkArtistaFav)
		REFERENCES Artistas (idArtista),
	CONSTRAINT fkUsuarioArt FOREIGN KEY (fkUsuario)
		REFERENCES Usuario (idUsuario),
	CONSTRAINT pkHistorico PRIMARY KEY (idHistorico));
    
CREATE TABLE vendaIngresso
	(idIngresso INT PRIMARY KEY AUTO_INCREMENT,
    codigo CHAR (40),
    fkUsuario INT,
    CONSTRAINT fkUsuarioIgres FOREIGN KEY (fkUsuario)
		REFERENCES Usuario (idUsuario));
        
CREATE TABLE Votacao
	(idVotacao INT PRIMARY KEY AUTO_INCREMENT,
    fkArtista INT,
    fkUsuario INT,
    CONSTRAINT fkArtistaVota FOREIGN KEY (fkArtista)
		REFERENCES Artistas (idArtista),
	CONSTRAINT fkUsuarioVota FOREIGN KEY (fkUsuario)
		REFERENCES Usuario (idUsuario));
        
SELECT COUNT(fkArtista) AS nm_votos, nome FROM Votacao 
	JOIN Artistas ON fkArtista = idArtista
		GROUP BY fkArtista;