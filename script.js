document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let loginMessage = document.getElementById("loginMessage");
    
    if (username === "comsup" && password === "comsupjne") {
        window.location.href = "dashboard.html";
    } else {
        loginMessage.innerText = "Username atau Password salah!";
        loginMessage.style.color = "red";
    }
});

function closePromo() {
    document.getElementById("promoOverlay").style.display = "none";
}

// Cek jika belum login, lempar ke halaman login
if (!localStorage.getItem("isLoggedIn") && window.location.pathname.includes("dashboard.html")) {
    window.location.href = "index.html";
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
