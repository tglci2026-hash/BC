function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen).classList.add('active');
}

/* FLOW */
setTimeout(() => {
    goTo('loading');

    setTimeout(() => {
        goTo('welcome');
    }, 3000);

}, 2000);

/* SIMULATION */
function login() {
    alert("Connexion réussie");
}

function register() {
    alert("Compte créé");
}
