const brawlers = [
    { name: "A.R.K.A.D", genre: "Inconnu", rarete: "Super Rare", categorie: "Degats bruts", portee: "Longue", hypercharge: "Non", annee: 2019 },
    { name: "Ambre", genre: "Féminin", rarete: "Légendaire", categorie: "Controle", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Ash", genre: "Masculin", rarete: "Épique", categorie: "Tir d'élite", portee: "Courte", hypercharge: "Non", annee: 2021 },
    { name: "Bartaba", genre: "Masculin", rarete: "Rare", categorie: "Artillerie", portee: "Longue", hypercharge: "Non", annee: 2018 },
    { name: "Bea", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Non", annee: 2019 },
    { name: "Belle", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Oui", annee: 2021 },
    { name: "Billie", genre: "Féminin", rarete: "Épique", categorie: "Tank", portee: "Courte", hypercharge: "Oui", annee: 2019 },
    { name: "Bo", genre: "Masculin", rarete: "Épique", categorie: "Controle", portee: "Longue", hypercharge: "Non", annee: 2018 },
    { name: "Bonnie", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Non", annee: 2022 },
    { name: "Brock", genre: "Masculin", rarete: "Rare", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Oui", annee: 2018 },
    { name: "Bull", genre: "Masculin", rarete: "Rare", categorie: "Tank", portee: "Courte", hypercharge: "Oui", annee: 2018 },
    { name: "Buster", genre: "Masculin", rarete: "Mythique", categorie: "Tank", portee: "Moyenne", hypercharge: "Non", annee: 2022 },
    { name: "Buzz", genre: "Masculin", rarete: "Mythique", categorie: "Assassinat", portee: "Courte", hypercharge: "Oui", annee: 2021 },
    { name: "Byron", genre: "Masculin", rarete: "Mythique", categorie: "Soutien", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Carl", genre: "Masculin", rarete: "Super Rare", categorie: "Degats bruts", portee: "Longue", hypercharge: "Non", annee: 2019 },
    { name: "Charlie", genre: "Féminin", rarete: "Mythique", categorie: "Controle", portee: "Longue", hypercharge: "Oui", annee: 2023 },
    { name: "Chester", genre: "Masculin", rarete: "Légendaire", categorie: "Degats bruts", portee: "Moyenne", hypercharge: "Non", annee: 2022 },
    { name: "Chuck", genre: "Masculin", rarete: "Mythique", categorie: "Degats bruts", portee: "Moyenne", hypercharge: "Non", annee: 2023 },
    { name: "Colette", genre: "Féminin", rarete: "Épique", categorie: "Degats bruts", portee: "Longue", hypercharge: "Oui", annee: 2020 },
    { name: "Colt", genre: "Masculin", rarete: "Rare", categorie: "Degats bruts", portee: "Longue", hypercharge: "Oui", annee: 2018 },
    { name: "Corbac", genre: "Masculin", rarete: "Légendaire", categorie: "Assassinat", portee: "Longue", hypercharge: "Oui", annee: 2017 },
    { name: "Cordelius", genre: "Masculin", rarete: "Légendaire", categorie: "Assassinat", portee: "Moyenne", hypercharge: "Oui", annee: 2023 },
    { name: "Darryl", genre: "Masculin", rarete: "Super Rare", categorie: "Tank", portee: "Moyenne", hypercharge: "Non", annee: 2018 },
    { name: "Doug", genre: "Masculin", rarete: "Mythique", categorie: "Soutien", portee: "Courte", hypercharge: "Non", annee: 2023 },
    { name: "Draco", genre: "Masculin", rarete: "Légendaire", categorie: "Tank", portee: "Moyenne", hypercharge: "Non", annee: 2024 },
    { name: "Dynamike", genre: "Masculin", rarete: "Super Rare", categorie: "Artillerie", portee: "Longue", hypercharge: "Oui", annee: 2018 },
    { name: "Edgar", genre: "Masculin", rarete: "Épique", categorie: "Assassinat", portee: "Courte", hypercharge: "Oui", annee: 2020 },
    { name: "El costo", genre: "Masculin", rarete: "Rare", categorie: "Tank", portee: "Courte", hypercharge: "Oui", annee: 2018 },
    { name: "Eliza", genre: "Féminin", rarete: "Épique", categorie: "Controle", portee: "Moyenne", hypercharge: "Non", annee: 2019 },
    { name: "Eve", genre: "Féminin", rarete: "Mythique", categorie: "Degats bruts", portee: "Très longue", hypercharge: "Non", annee: 2022 },
    { name: "Fang", genre: "Masculin", rarete: "Mythique", categorie: "Assassinat", portee: "Très longue", hypercharge: "Oui", annee: 2022 },
    { name: "Frank", genre: "Masculin", rarete: "Épique", categorie: "Tank", portee: "Courte", hypercharge: "Non", annee: 2018 },
    { name: "Gael", genre: "Masculin", rarete: "Épique", categorie: "Controle", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Gray", genre: "Masculin", rarete: "Mythique", categorie: "Soutien", portee: "Longue", hypercharge: "Non", annee: 2022 },
    { name: "Djinn", genre: "Masculin", rarete: "Mythique", categorie: "Controle", portee: "Longue", hypercharge: "Oui", annee: 2019 },
    { name: "Griff", genre: "Masculin", rarete: "Épique", categorie: "Controle", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Grom", genre: "Masculin", rarete: "Épique", categorie: "Artillerie", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Gus", genre: "Masculin", rarete: "Super Rare", categorie: "Soutien", portee: "Très longue", hypercharge: "Non", annee: 2022 },
    { name: "Hank", genre: "Masculin", rarete: "Épique", categorie: "Tank", portee: "Courte", hypercharge: "Non", annee: 2023 },
    { name: "Jacky", genre: "Féminin", rarete: "Super Rare", categorie: "Tank", portee: "Courte", hypercharge: "Oui", annee: 2020 },
    { name: "Janet", genre: "Féminin", rarete: "Mythique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Non", annee: 2022 },
    { name: "Jessie", genre: "Féminin", rarete: "Rare", categorie: "Controle", portee: "Longue", hypercharge: "Oui", annee: 2017 },
    { name: "Kit", genre: "Masculin", rarete: "Légendaire", categorie: "Soutien", portee: "Courte", hypercharge: "Non", annee: 2023 },
    { name: "LarryLawrie", genre: "Masculin", rarete: "Épique", categorie: "Artillerie", portee: "Longue", hypercharge: "Non", annee: 2024 },
    { name: "Lily", genre: "Féminin", rarete: "Mythique", categorie: "Assassinat", portee: "Courte", hypercharge: "Non", annee: 2024 },
    { name: "Leon", genre: "Masculin", rarete: "Légendaire", categorie: "Assassinat", portee: "Très longue", hypercharge: "Oui", annee: 2018 },
    { name: "Lola", genre: "Féminin", rarete: "Épique", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Lou", genre: "Masculin", rarete: "Mythique", categorie: "controle", portee: "Longue", hypercharge: "Oui", annee: 2020 },
    { name: "Maisie", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Oui", annee: 2023 },
    { name: "Mandy", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Très longue", hypercharge: "Non", annee: 2023 },
    { name: "Max", genre: "Féminin", rarete: "Mythique", categorie: "Soutien", portee: "Longue", hypercharge: "Oui", annee: 2019 },
    { name: "Meg", genre: "Féminin", rarete: "Légendaire", categorie: "Tank", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Melody", genre: "Féminin", rarete: "Mythique", categorie: "Assassinat", portee: "Longue", hypercharge: "Non", annee: 2024 },
    { name: "Mico", genre: "Masculin", rarete: "Mythique", categorie: "Assassinat", portee: "Moyenne", hypercharge: "Oui", annee: 2023 },
    { name: "Mortis", genre: "Masculin", rarete: "Mythique", categorie: "Assassinat", portee: "Courte", hypercharge: "Non", annee: 2017 },
    { name: "Monsieur M.", genre: "Masculin", rarete: "Mythique", categorie: "controle", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Nani", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Nita", genre: "Féminin", rarete: "Rare", categorie: "Dégâts bruts", portee: "Moyenne", hypercharge: "Oui", annee: 2018 },
    { name: "Otis", genre: "Masculin", rarete: "Mythique", categorie: "controle", portee: "Longue", hypercharge: "Non", annee: 2022 },
    { name: "Pam", genre: "Féminin", rarete: "Épique", categorie: "Soutien", portee: "Longue", hypercharge: "Non", annee: 2018 },
    { name: "Pearl", genre: "Inconnu", rarete: "Épique", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Oui", annee: 2023 },
    { name: "Penny", genre: "Féminin", rarete: "Super Rare", categorie: "Artillerie", portee: "Longue", hypercharge: "Non", annee: 2018 },
    { name: "Polly", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Très longue", hypercharge: "Non", annee: 2017 },
    { name: "Poco", genre: "Masculin", rarete: "Rare", categorie: "Soutien", portee: "Longue", hypercharge: "Non", annee: 2017 },
    { name: "R-T", genre: "Inconnu", rarete: "Mythique", categorie: "Dégâts bruts", portee: "Très longue", hypercharge: "Non", annee: 2023 },
    { name: "Ricochet", genre: "Masculin", rarete: "Super Rare", categorie: "Dégâts bruts", portee: "Très longue", hypercharge: "Non", annee: 2017 },
    { name: "Rosa", genre: "Féminin", rarete: "Rare", categorie: "Tank", portee: "Courte", hypercharge: "Oui", annee: 2019 },
    { name: "Medor", genre: "Masculin", rarete: "Mythique", categorie: "Soutien", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Sam", genre: "Masculin", rarete: "Épique", categorie: "Assassinat", portee: "Courte", hypercharge: "Non", annee: 2022 },
    { name: "Emeri", genre: "Masculin", rarete: "Légendaire", categorie: "controle", portee: "Moyenne", hypercharge: "Oui", annee: 2019 },
    { name: "Shelly", genre: "Féminin", rarete: "Commune", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Oui", annee: 2017 },
    { name: "Spike", genre: "Masculin", rarete: "Légendaire", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Oui", annee: 2017 },
    { name: "Wally", genre: "Inconnu", rarete: "Mythique", categorie: "Artillerie", portee: "Moyenne", hypercharge: "Oui", annee: 2020 },
    { name: "Squeak", genre: "Inconnu", rarete: "Mythique", categorie: "controle", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Stu", genre: "Masculin", rarete: "Épique", categorie: "Assassinat", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Surge", genre: "Masculin", rarete: "Légendaire", categorie: "Dégâts bruts", portee: "Moyenne", hypercharge: "Non", annee: 2020 },
    { name: "Tara", genre: "Féminin", rarete: "Mythique", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Non", annee: 2017 },
    { name: "Tick", genre: "Inconnu", rarete: "Super Rare", categorie: "Artillerie", portee: "Longue", hypercharge: "Oui", annee: 2019 },
    { name: "Willow", genre: "Féminin", rarete: "Mythique", categorie: "controle", portee: "Longue", hypercharge: "Non", annee: 2023 },
];

// Requete SQL pour insérer les brawlers dans la base de données
/*
Voici la table SQL pour insérer les brawlers dans la base de données
CREATE TABLE Brawler(
   Nom VARCHAR(50),
   rarete VARCHAR(50),
   genre VARCHAR(50),
   categorie VARCHAR(50),
   portee VARCHAR(50),
   hypercharge_bool boolean,
   annee SMALLINT,
   PRIMARY KEY(Nom)
);

CREATE TABLE Hypercharge(
   hypercharge_id INT(50),
   link_github VARCHAR(120),
   Nom VARCHAR(50) NOT NULL,
   PRIMARY KEY(hypercharge_id),
   UNIQUE(Nom),
   FOREIGN KEY(Nom) REFERENCES Brawler(Nom)
);

CREATE TABLE Skin(
   skin_id SMALLINT,
   link_github VARCHAR(120),
   Nom VARCHAR(50) NOT NULL,
   PRIMARY KEY(skin_id),
   UNIQUE(Nom),
   FOREIGN KEY(Nom) REFERENCES Brawler(Nom)
);


--Insertions des brawlers dans la base de données

INSERT INTO Brawler (Nom, rarete, genre, categorie, portee, hypercharge_bool, annee) VALUES
('A.R.K.A.D', 'Inconnu', 'Inconnu', 'Degats bruts', 'Longue', 0, 2019),
('Ambre', 'Légendaire', 'Féminin', 'Controle', 'Longue', 0, 2020),
('Ash', 'Épique', 'Masculin', 'Tir d\'élite', 'Courte', 0, 2021),
('Bartaba', 'Rare', 'Masculin', 'Artillerie', 'Longue', 0, 2018),
('Bea', 'Épique', 'Féminin', 'Tir d\'élite', 'Longue', 0, 2019),
('Belle', 'Épique', 'Féminin', 'Tir d\'élite', 'Longue', 1, 2021),
('Billie', 'Épique', 'Féminin', 'Tank', 'Courte', 1, 2019),
('Bo', 'Épique', 'Masculin', 'Controle', 'Longue', 0, 2018),
('Bonnie', 'Épique', 'Féminin', 'Tir d\'élite', 'Longue', 0, 2022),
('Brock','Rare','Masculin','Tir d\'élite','Longue','1','2018'),
('Bull','Rare','Masculin','Tank','Courte','1','2018'),
('Buster','Mythique','Masculin','Tank','Moyenne','0','2022'),
('Buzz','Mythique','Masculin','Assassinat','Courte','1','2021'),
('Byron','Mythique','Masculin','Soutien','Longue','0','2020'),
('Carl','Super Rare','Masculin','Degats bruts','Longue','0','2019'),
('Charlie','Mythique','Féminin','Controle','Longue','1' ,'2023'),
('Chester' ,'Légendaire' ,'Masculin' ,'Degats bruts' ,'Moyenne' ,'0' ,'2022'),
('Chuck' ,'Mythique' ,'Masculin' ,'Degats bruts' ,'Moyenne' ,'0' ,'2023'),
('Colette' ,'Épique' ,'Féminin' ,'Degats bruts' ,'Longue' ,'1' ,'2020'),
('Colt' ,'Rare' ,'Masculin' ,'Degats bruts' ,'Longue' ,'1' ,'2018'),
('Corbac' ,'Légendaire' ,'Masculin' ,'Assassinat' ,'Longue' ,'1' ,'2017'),
('Cordelius' ,'Légendaire' ,'Masculin' ,'Assassinat' ,'Moyenne' ,'1' ,'2023'),
('Darryl' ,'Super Rare' ,'Masculin' ,'Tank' ,'Moyenne' ,'0' ,'2018'),
('Doug' ,'Mythique' ,'Masculin' ,'Soutien' ,'Courte' ,'0' ,'2023'),
('Draco' ,'Légendaire' ,'Masculin' ,'Tank' ,'Moyenne' ,'0' ,'2024'),
('Dynamike','Super Rare','Masculin','Artillerie','Longue','1','2018'),
('Edgar','Épique','Masculin','Assassinat','Courte','1','2020'),
('El costo','Rare','Masculin','Tank','Courte','1','2018'),
('Eliza' ,'Épique' ,'Féminin' ,'Controle' ,'Moyenne' ,'0' ,'2019'),
('Eve' ,'Mythique' ,'Féminin' ,'Degats bruts' ,'Très longue' ,'0' ,'2022'),
('Fang' ,'Mythique' ,'Masculin' ,'Assassinat' ,'Très longue' ,'1' ,'2022'),
('Frank','Épique','Masculin','Tank','Courte','0','2018'),
('Gael','Épique','Masculin','Controle','Longue','0','2020'),
('Gray','Mythique','Masculin','Soutien','Longue','0','2022'),
('Djinn' ,'Mythique' ,'Masculin' ,'Controle' ,'Longue' ,'1' ,'2019'),
('Griff' ,'Épique' ,'Masculin' ,'Controle' ,'Longue' ,'0' ,'2021'),
('Grom', 'Épique', 'Masculin', 'Artillerie', 'Longue', 0, 2021),
('Gus', 'Super Rare', 'Masculin', 'Soutien', 'Très longue', 0, 2022),
('Hank', 'Épique', 'Masculin', 'Tank', 'Courte', 0, 2023),
('Jacky', 'Super Rare', 'Féminin', 'Tank', 'Courte', 1, 2020),
('Janet', 'Mythique', 'Féminin', 'Tir d\'élite', 'Longue', 0, 2022),
('Jessie', 'Rare', 'Féminin', 'Controle', 'Longue', 1, 2017),
('Kit' , 'Légendaire' , 'Féminin' , 'Soutien' , 'Courte' , 0 , 2023),
('LarryLawrie','Épique','Masculin','Artillerie','Longue','0','2024'),
('Lily','Mythique','Féminin','Assassinat','Courte','0','2024'),
('Leon','Légendaire','Masculin','Assassinat','Très longue','1','2018'),
('Lola','Épique','Féminin','Dégâts bruts ','Longue ','0 ','2021'),
('Lou ','Mythique ','Masculin ','controle ','Longue ','1 ','2020'),
('Maisie ','Épique ','Féminin ','Tir d\'élite ','Longue ','1 ','2023'),
('Mandy ','Épique ','Féminin ','Tir d\'élite ','Très longue ','0 ','2023'),
('Max','Mythique','Féminin','Soutien','Longue','1','2019'),
('Meg' ,'Légendaire' ,'Féminin' ,'Tank' ,'Longue' ,'0' ,'2021'),
('Melody' ,'Mythique' ,'Féminin' ,'Assassinat' ,'Longue' ,'0' ,'2024'),
('Mico' ,'Mythique' ,'Masculin' ,'Assassinat' ,'Moyenne' ,'1' ,'2023'),
('Mortis','Mythique','Masculin','Assassinat','Courte','0','2017'),
('Monsieur M.' ,'Mythique' ,'Masculin' ,'controle' ,'Longue' ,'0' ,'2020'),
('Nani', 'Épique', 'Féminin', 'Tir d\'élite', 'Longue', 0, 2020),
('Nita', 'Rare', 'Féminin', 'Dégâts bruts', 'Moyenne', 1, 2018),
('Otis', 'Mythique', 'Masculin', 'controle', 'Longue', 0, 2022),
('Pam', 'Épique', 'Féminin', 'Soutien', 'Longue', 0, 2018),
('Pearl','Épique','Inconnu','Dégâts bruts','Longue','1','2023'),
('Penny','Super Rare','Féminin','Artillerie','Longue','0','2018'),
('Polly','Épique','Féminin','Tir d\'élite','Très longue','0','2017'),
('Poco','Rare','Masculin','Soutien','Longue','0','2017'),
('R-T' ,'Inconnu' ,'Inconnu' ,'Dégâts bruts' ,'Très longue' ,'0' ,'2023'),
('Ricochet' ,'Super Rare' ,'Masculin' ,'Dégâts bruts' ,'Très longue' ,'0' ,'2017'),
('Rosa', 'Rare', 'Féminin', 'Tank', 'Courte', 1, 2019),
('Medor', 'Mythique', 'Masculin', 'Soutien', 'Longue', 0, 2021),
('Sam', 'Épique', 'Masculin', 'Assassinat', 'Courte', 0, 2022),
('Emeri' , 'Légendaire' , 'Masculin' , 'controle' , 'Moyenne' , 1 , 2019),
('Shelly','Commune','Féminin','Dégâts bruts','Longue','1','2017'),
('Spike','Légendaire','Masculin','Dégâts bruts ','Longue ','1 ','2017'),
('Wally ','Inconnu ','Inconnu ','Artillerie ','Moyenne ','1 ','2020'),
('Squeak ','Inconnu ','Inconnu ','controle ','Longue ','0 ','2021'),
('Stu ', 'Épique ', 'Masculin ', 'Assassinat ', 'Longue ', '0 ', '2021'),
('Surge ', 'Légendaire ', 'Masculin ', 'Dégâts bruts ', 'Moyenne ', '0 ', '2020'),
('Tara ', 'Mythique ', 'Féminin ', 'Dégâts bruts ', 'Longue ', '0 ', '2017'),
('Tick', 'Super Rare', 'Inconnu', 'Artillerie', 'Longue', 1, 2019),
('Willow', 'Mythique', 'Féminin', 'controle', 'Longue', 0, 2023);


-- Insertion des hypercharges dans la base de données

INSERT INTO Hypercharge (hypercharge_id, link_github, Nom) VALUES
(1, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Bull.webp' , 'Bull'),
(2, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Colette.webp' , 'Colette'),
(3, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Colt.webp' , 'Colt'),
(4, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Corbac.webp' , 'Corbac'),
(5, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Dynamike.webp' , 'Dynamike'),
(6, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Fang.webp' , 'Fang'),
(7, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Jacky.webp' , 'Jacky'),
(8, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Jessie.webp' , 'Jessie'),
(9, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Lou.webp' , 'Lou'),
(10, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Maisie.webp' , 'Maisie'),
(11, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Shelly.webp' , 'Shelly'),
(12, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/Spike.webp' , 'Spike');


-- Insertion des skins dans la base de données

INSERT INTO Skin (skin_id, link_github, Nom) VALUES
(1, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Bull.webp' , 'Bull'),
(2, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Colt.webp' , 'Colt'),
(3, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Shelly.webp' , 'Shelly'),
(4, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Brock.webp' , 'Brock'),
(5, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Buzz.webp' , 'Buzz'),
(6, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Djinn.webp' , 'Djinn'),
(7, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Dynamike.webp' , 'Dynamike'),
(8, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/El costo.webp' , 'El costo'),
(9, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Fang.webp' , 'Fang'),
(10, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Medor.webp' , 'Medor'),
(11, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Poco.webp' , 'Poco'),
(12, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Sam.webp' , 'Sam'),
(13, 'https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/Surge.webp' , 'Surge');

*/

const users = [
    {nom: "Garnier", prenom: "Tristan", email: "tristan.garnier@gmail.com"},
    {nom: "Porot", prenom: "Nicolas", email: "nicolas.porot@gmail.com"},
    {nom: "GUÉNÉGAN", prenom: "Alexandre", email: "alexandre.guenegan@gmail.com"},
    {nom: "SOAVE", prenom: "Raphaël", email: "raphael.soave@gmail.com"}
]

// Récupere les users pour les afficher dans le tableau de la page admin
// les colonnes sont : Nom, Prénom, Email
function displayUsers() {
    const usersContainer = document.getElementById("users_container");
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        usersContainer.appendChild(row);
    });
}

let selectedBrawler;
let attemptedBrawlers = new Set();
let currentGuessType = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

document.addEventListener("DOMContentLoaded", () => {
    selectedBrawler = getRandomBrawler();
    sessionStorage.setItem('selectedBrawler', JSON.stringify(selectedBrawler));
    console.log("Selected Fichier Type:", currentGuessType); // Debug: Vérifiez le type du fichier sélectionné
    console.log("Selected Brawler:", selectedBrawler);  // Debug: Vérifiez le brawler sélectionné
});


function getRandomBrawler() {
    let random_brawler = brawlers[Math.floor(Math.random() * brawlers.length)];
    if (currentGuessType === "brawler.html") {
        return random_brawler;
    } else if (currentGuessType === "hypercharge.html") {
        let brawler_hypercharge = ["Bull", "Colette", "Colt", "Corbac", "Dynamike", "Fang", "Jacky", "Jessie", "Lou", "Maisie", "Shelly", "Spike"];
        random_brawler = brawler_hypercharge[Math.floor(Math.random() * brawler_hypercharge.length)];
        const random_brawler_url = `../image/hypercharge/${random_brawler}.webp`;
        document.getElementById('hypercharge_img').src = random_brawler_url;
        return random_brawler;
    } else if (currentGuessType === "skin.html") {
        let brawler_skin = ["Bull", "Colt","Shelly", "Brock", "Buzz", "Djinn", "Dynamike", "El costo", "Fang", "Medor", "Poco", "Sam", "Surge"];
        random_brawler = brawler_skin[Math.floor(Math.random() * brawler_skin.length)];
        document.getElementById('skin_img').src = `../image/skin/${random_brawler}.webp`;
        document.getElementById('skin_img').style.width = "50%";
        document.getElementById('skin_img').style.filter = 'blur(10px)';
        return random_brawler;
    }
}

function filterDropdown() {
    let input = document.getElementById('search_input').value.toLowerCase();
    let dropdown = document.getElementById('scroll_menu');
    dropdown.innerHTML = '';

    if (input === "") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
        brawlers.forEach(brawler => {
            if (!attemptedBrawlers.has(brawler.name.toLowerCase()) && brawler.name.toLowerCase().startsWith(input)) {
                let item = document.createElement('div');
                item.className = 'scroll_item';

                let img_brawler = document.createElement('img');
                img_brawler.src = `../image/brawler/${brawler.name}.webp`;
                img_brawler.alt = brawler.name; // Ajout d'un texte alternatif pour l'image
                img_brawler.className = 'brawler_img'; // Ajout d'une classe CSS pour styliser l'image

                let text_brawler = document.createElement('span');
                text_brawler.innerText = brawler.name;

                item.appendChild(img_brawler);
                item.appendChild(text_brawler);

                item.onclick = () => {
                    selectBrawler(brawler.name);
                    submitGuess();
                };

                dropdown.appendChild(item);
            }
        });
    }
}

function selectBrawler(name) {
    document.getElementById('search_input').value = name;
    document.getElementById('scroll_menu').style.display = "none";
    submitGuess();
}

function handleKeydown(event) {
    if (event.key === 'Enter') {
        submitGuess();
    }
}

function submitGuess() {
    const guess = document.getElementById('search_input').value;
    document.getElementById('search_input').value = '';

    if (attemptedBrawlers.has(guess.toLowerCase())) {
        return; // Ne rien faire si le brawler a déjà été tenté
    }

    const brawler = brawlers.find(b => b.name.toLowerCase() === guess.toLowerCase());
    if (!brawler) {
        return; // Ne rien faire si le brawler n'est pas trouvé
    }

    attemptedBrawlers.add(guess.toLowerCase());
    if (currentGuessType === "brawler.html") {
        const resultContainer = document.getElementById('results_container');

        let valueRow = document.createElement('tr');
        let nameCell = document.createElement('td');
        let img_brawler = document.createElement('img');
        let text_brawler = document.createElement('span');
        text_brawler.innerText = brawler.name;
        img_brawler.src = `../image/brawler/${brawler.name}.webp`;
        img_brawler.alt = brawler.name; // Ajout d'un texte alternatif pour l'image
        img_brawler.className = 'brawler_img'; // Ajout d'une classe CSS pour styliser l'image
        nameCell.appendChild(img_brawler);
        nameCell.appendChild(text_brawler);
        valueRow.appendChild(nameCell);

        Object.keys(selectedBrawler).forEach(key => {
            if (key !== 'name') {
                let td = document.createElement('td');
                td.innerText = brawler[key];
                if (key === 'annee') { // Vérifiez si la clé est l'année de sortie
                    td.innerText = brawler[key];
                    if (selectedBrawler[key] === brawler[key]) {
                        td.classList.add('correct');
                    } else {
                        td.classList.add('wrong');
                        // Ajoutez la comparaison des dates
                        if (brawler[key] < selectedBrawler[key]) {
                            td.innerText += ' ▲'; // Ajoutez une flèche vers le haut si la date est supérieur
                        } else {
                            td.innerText += ' ▼'; // Ajoutez une flèche vers le bas si la date est inférieur
                        }
                    }
                }
                else
                    {
                        if (selectedBrawler[key] === brawler[key]) {
                            td.classList.add('correct');
                        } else {
                            td.classList.add('wrong');
                        }
                    }
                valueRow.appendChild(td);
            }
        });
        resultContainer.insertBefore(valueRow, resultContainer.firstChild);
        if (brawler.name === selectedBrawler.name) {
            document.getElementById('search_input').disabled = 1;
            document.getElementById('search_input').placeholder = "Brawler trouvé !";
            document.getElementById('recommencer_button').style.display = 'block';
        }
    }
    else{
        let attempt = document.createElement('div');
        attempt.innerText = brawler.name;
        attempt.style.backgroundColor ="lightcoral";
        document.getElementById('attempts').insertBefore(attempt, document.getElementById('attempts').firstChild);
        if (brawler.name === selectedBrawler) {
            attempt.style.backgroundColor = "lightgreen";
            if (currentGuessType === "skin.html") {
                document.getElementById('skin_img').style.filter = 'blur(0px)';
            }
            document.getElementById('search_input').disabled = true;
            document.getElementById('search_input').placeholder = "Brawler trouvé !";
            document.getElementById('recommencer_button').style.display = 'block';
        }
    }
}

function recommencer() {
    selectedBrawler = getRandomBrawler();
    sessionStorage.setItem('selectedBrawler', JSON.stringify(selectedBrawler));
    console.log("Selected Fichier Type:", currentGuessType); // Debug: Vérifiez le type du fichier sélectionné
    console.log("Selected Brawler:", selectedBrawler); // Debug: Vérifiez le brawler sélectionné
    document.getElementById('search_input').value = '';
    document.getElementById('search_input').disabled = false;
    document.getElementById('search_input').placeholder = "Tape le nom d'un brawler...";
    if (currentGuessType === 'brawler.html') {
        document.getElementById('results_container').innerHTML = '';
    }
    else {
        document.getElementById('attempts').innerHTML = '';
    }
    attemptedBrawlers.clear();
    document.getElementById('recommencer_button').style.display = 'none';
}
