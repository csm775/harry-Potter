document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        login(email, password);
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        saveUser(email, password);
        alert('Inscription réussie');
    });

    if (isLoggedIn()) {
        window.location.href = 'logout.html';
    }

    function saveUser(email, password) {
        localStorage.setItem('user', JSON.stringify({ email, password }));
    }
    
    function getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    
    function isLoggedIn() {
        return localStorage.getItem('loggedIn') === 'true';
    }
    
    function login(email, password) {
        const user = getUser();
        if (user && user.email === email && user.password === password) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'logout.html';
        } else {
            alert('Email ou mot de passe incorrect');
        }
    }
    
    function logout() {
        localStorage.setItem('loggedIn', 'false');
    }
});
