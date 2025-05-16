// Esto es un intento de chatbot //

function toggleChat() {
  const bot = document.getElementById("chatbot-bubble");
  const messages = document.getElementById("messages");
  
  if (bot.style.display === "flex") {
    bot.style.display = "none";
  } else {
    bot.style.display = "flex";

    // Si el chatbot está vacío, envía mensaje inicial
    if (messages.innerHTML.trim() === "") {
      messages.innerHTML += `<p class='bot'><strong>Bot:</strong> ¡Hola! Soy <strong>Asistente Tech</strong>. ¿En qué puedo ayudarte hoy?</p>`;
    }
    messages.scrollTop = messages.scrollHeight;
  }
}

function sendMessage() {
    const inputField = document.getElementById("userInput");
    const userText = inputField.value.trim();
    if (userText === "") return;

    const messages = document.getElementById("messages");
    messages.innerHTML += `<p class='user'><strong>Tú:</strong> ${userText}</p>`;
    const botReply = getBotResponse(userText);
    messages.innerHTML += `<p class='bot'><strong>Bot:</strong> ${botReply}</p>`;
    inputField.value = "";
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("hola") || input.includes("hey")) return "Hola!. ¿En que puedo ayudarte?";
    if (input.includes("adios") || input.includes("bye")) return "Adios!. Que tengas un buen dia.";
    if (input.includes("ram")) return "Sí, tenemos RAM DDR4 y DDR5, desde 8GB hasta 32GB.";
    if (input.includes("usb")) return "Claro, contamos con USB 3.0 y 3.1 de 16GB hasta 128GB.";
    if (input.includes("mantenimiento")) return "Ofrecemos mantenimiento de PCs, laptops y limpieza interna.";
    if (input.includes("precio") || input.includes("precios")) return "Nuestros precios varían según el modelo. ¿Qué producto te interesa?";
    if (input.includes("ubicación") || input.includes("dónde están")) return "Estamos en Ciudad Tech, Calle Innovación 123.";
    if (input.includes("pago") || input.includes("transferencia")) return "Aceptamos pagos por transferencia, efectivo y tarjeta.";
    return "No estoy seguro de que responder a eso, si deseas acceder a mas informacion puedes contactarnos.";
}

  // Este bloque hace que funcione con Enter
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
});