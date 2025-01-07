// Menunggu sampai DOM dimuat
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script Loaded");

  const input = document.getElementById("chatbot-input");
  const sendButton = document.getElementById("chatbot-send");
  const messages = document.getElementById("chatbot-messages");

  // Fungsi untuk mengirim pesan
  sendButton.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      // Tambahkan pesan pengguna ke chatbot
      const userMessage = document.createElement("div");
      userMessage.textContent = input.value;
      userMessage.style.textAlign = "right";
      userMessage.style.margin = "5px 0";
      messages.appendChild(userMessage);

      // Tambahkan balasan chatbot
      const botMessage = document.createElement("div");
      botMessage.textContent = "Terima kasih atas pesan Anda!";
      botMessage.style.textAlign = "left";
      botMessage.style.margin = "5px 0";
      botMessage.style.color = "#555";
      messages.appendChild(botMessage);

      // Kosongkan input dan scroll ke bawah
      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }
  });
});
