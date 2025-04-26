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
    { name: "Lou", genre: "Masculin", rarete: "Mythique", categorie: "Contrôle", portee: "Longue", hypercharge: "Oui", annee: 2020 },
    { name: "Maisie", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Oui", annee: 2023 },
    { name: "Mandy", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Très longue", hypercharge: "Non", annee: 2023 },
    { name: "Max", genre: "Féminin", rarete: "Mythique", categorie: "Soutien", portee: "Longue", hypercharge: "Oui", annee: 2019 },
    { name: "Meg", genre: "Féminin", rarete: "Légendaire", categorie: "Tank", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Melody", genre: "Féminin", rarete: "Mythique", categorie: "Assassinat", portee: "Longue", hypercharge: "Non", annee: 2024 },
    { name: "Mico", genre: "Masculin", rarete: "Mythique", categorie: "Assassinat", portee: "Moyenne", hypercharge: "Oui", annee: 2023 },
    { name: "Mortis", genre: "Masculin", rarete: "Mythique", categorie: "Assassinat", portee: "Courte", hypercharge: "Non", annee: 2017 },
    { name: "Monsieur M.", genre: "Masculin", rarete: "Mythique", categorie: "Contrôle", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Nani", genre: "Féminin", rarete: "Épique", categorie: "Tir d'élite", portee: "Longue", hypercharge: "Non", annee: 2020 },
    { name: "Nita", genre: "Féminin", rarete: "Rare", categorie: "Dégâts bruts", portee: "Moyenne", hypercharge: "Oui", annee: 2018 },
    { name: "Otis", genre: "Masculin", rarete: "Mythique", categorie: "Contrôle", portee: "Longue", hypercharge: "Non", annee: 2022 },
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
    { name: "Emeri", genre: "Masculin", rarete: "Légendaire", categorie: "Contrôle", portee: "Moyenne", hypercharge: "Oui", annee: 2019 },
    { name: "Shelly", genre: "Féminin", rarete: "Commune", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Oui", annee: 2017 },
    { name: "Spike", genre: "Masculin", rarete: "Légendaire", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Oui", annee: 2017 },
    { name: "Wally", genre: "Inconnu", rarete: "Mythique", categorie: "Artillerie", portee: "Moyenne", hypercharge: "Oui", annee: 2020 },
    { name: "Squeak", genre: "Inconnu", rarete: "Mythique", categorie: "Contrôle", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Stu", genre: "Masculin", rarete: "Épique", categorie: "Assassinat", portee: "Longue", hypercharge: "Non", annee: 2021 },
    { name: "Surge", genre: "Masculin", rarete: "Légendaire", categorie: "Dégâts bruts", portee: "Moyenne", hypercharge: "Non", annee: 2020 },
    { name: "Tara", genre: "Féminin", rarete: "Mythique", categorie: "Dégâts bruts", portee: "Longue", hypercharge: "Non", annee: 2017 },
    { name: "Tick", genre: "Inconnu", rarete: "Super Rare", categorie: "Artillerie", portee: "Longue", hypercharge: "Oui", annee: 2019 },
    { name: "Willow", genre: "Féminin", rarete: "Mythique", categorie: "Contrôle", portee: "Longue", hypercharge: "Non", annee: 2023 },
];

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
        const random_brawler_url = `https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/hypercharge/${random_brawler}.webp`;
        document.getElementById('hypercharge_img').src = random_brawler_url;
        return random_brawler;
    } else if (currentGuessType === "skin.html") {
        let brawler_skin = ["Bull", "Colt","Shelly", "Brock", "Buzz", "Djinn", "Dynamike", "El costo", "Fang", "Medor", "Poco", "Sam", "Surge"];
        random_brawler = brawler_skin[Math.floor(Math.random() * brawler_skin.length)];
        document.getElementById('skin_img').src = `https://raw.githubusercontent.com/warddiablo/Projet_GreenIT/refs/heads/main/image/skin/${random_brawler}.webp`;
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
                img_brawler.src = `../image/brawler/${brawler.name}.png`;
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
        img_brawler.src = `../image/brawler/${brawler.name}.png`;
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
            document.getElementById('search_input').disabled = true;
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
