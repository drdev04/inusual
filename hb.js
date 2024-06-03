function showGreeting() {
    const name = document.getElementById('nameInput').value;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (name && nameRegex.test(name)) {
        window.location.href = `dist/index.html?name=${name}`;
    } else {
        const greetingMessage = document.getElementById('greetingMessage');
        greetingMessage.innerHTML = `Pero, ${name} no es un nombre. ¿O sí?`;
        greetingMessage.style.display = 'block';
    }
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}