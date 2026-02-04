const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

// Public echo WebSocket server
const socket = new WebSocket("wss://echo.websocket.events/");

socket.onmessage = function(event) {
    addMessage(event.data, "server");
};

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = input.value.trim();
    if (message === "") return;

    socket.send(message);
    addMessage(message, "user");

    input.value = "";
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}