const backendUrl = 'https://localhost:3000'; // Remplace ici par ton URL backend

// Gestion Inscription
document.querySelector('.login-register-container form:nth-of-type(2)').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const nom = form.querySelector('input[placeholder="Nom"]').value;
    const prenom = form.querySelector('input[placeholder="Prénom"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const password = form.querySelector('input[placeholder="Mot de passe"]').value;

    try {
        const response = await fetch(`${backendUrl}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nom, prenom, email, password })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error(error);
        alert('Erreur lors de l\'inscription');
    }
});

// Gestion Connexion
document.querySelector('.login-register-container form:nth-of-type(1)').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const password = form.querySelector('input[placeholder="Mot de passe"]').value;

    try {
        const response = await fetch(`${backendUrl}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            alert(`Bienvenue ${data.user.prenom} !`);
            // Tu peux ici rediriger sur une autre page si besoin :
            // window.location.href = "/fichier_html/admin.html";
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        alert('Erreur lors de la connexion');
    }
});
