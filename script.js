// =========================
// Typing Animation
// =========================

const text = "Full Stack Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function () {
    typeWriter();
    showTime();
};


// =========================
// Dark Mode Toggle
// =========================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// =========================
// Live Clock
// =========================

function showTime() {
    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

    setTimeout(showTime, 1000);
}


// =========================
// Contact Form Validation
// =========================

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    if (message === "") {
        alert("Please enter your message");
        return false;
    }

    alert("Message Sent Successfully!");
    return true;
}


// =========================
// Scroll To Top Button
// =========================

window.onscroll = function () {

    let btn = document.getElementById("topBtn");

    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================
// Welcome Message
// =========================

console.log("Welcome to Anitha's Portfolio!");