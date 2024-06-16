/*function showGreeting() {
    const name = document.getElementById('nameInput').value;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (name && nameRegex.test(name)) {
        window.location.href = `dist/index.html?name=${name}`;
    } else {
        const greetingMessage = document.getElementById('greetingMessage');
        greetingMessage.innerHTML = `Pero, ${name} no es un nombre. ¿O sí?`;
        greetingMessage.style.display = 'block';
    }
}*/
function showGreeting() {
    const name = document.getElementById('nameInput').value;
    if (/^juan(\s[a-záéíóúñ]+)*$/i.test(name)) {
        window.location.href = `dist/index.html?name=${encodeURIComponent(name)}`;
    } else {
        const greetingMessage = document.getElementById('greetingMessage');
        greetingMessage.innerHTML = `Lo siento, ${name} no hay un mensaje para ti por el momento`;
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

/*function showGreeting() {
    const name = document.getElementById('nameInput').value.toLowerCase(); // Paso 1
    const nameRegex = /^[a-zA-Z\s]*$/;
    const greetingMessage = document.getElementById('greetingMessage');

    if (name && nameRegex.test(name)) {
        let personalizedMessage = "Hola, ¡bienvenido!"; // Mensaje por defecto

        // Paso 2: Verificar el nombre y asignar un mensaje personalizado
        switch (name) {
            case "juan":
                window.location.href = `dist/juan.html?name=${encodeURIComponent(originalName)}`;
                break;
            case "Juan":
                window.location.href = "dist/juan.html";
                break;
            case "JUAN":
                window.location.href = "dist/juan.html";
                break;
            case "Gina":
                personalizedMessage = "¡Hola Maria! Esperamos que te encuentres bien.";
                break;
            case "gina":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "GINA":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "natalia":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "Natalia":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "NATALIA":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "gianmarco":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "Gianmarco":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;
            case "GIANMARCO":
                personalizedMessage = "¡Hola Pedro! ¿Listo para comenzar?";
                break;    
            // Agrega más casos según sea necesario
        }

        // Redirigir o mostrar el mensaje personalizado
        // Por ejemplo, podrías querer cambiar la redirección a mostrar el mensaje en la página actual:
        greetingMessage.innerHTML = personalizedMessage;
        greetingMessage.style.display = 'block';
    } else {
        // Paso 3: Mensaje por defecto si el input no es un nombre válido
        greetingMessage.innerHTML = `Pero, ${document.getElementById('nameInput').value} no es un nombre. ¿O sí?`;
        greetingMessage.style.display = 'block';
    }
}*/