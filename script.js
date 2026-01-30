// Lista de todos los emojis de WhatsApp (simplificado para ejemplo, se puede expandir)
const allEmojis = ["😀","😂","😍","🤔","😎","😢","😡","🎉","✨","💻","🐱","🔥","🍕","🌟","🚀","💡","🥳","🤯","😴","🤖"];

// Referencias al DOM
const emoji1Select = document.getElementById("emoji1");
const emoji2Select = document.getElementById("emoji2");
const emojiLayer1 = document.getElementById("emojiLayer1");
const emojiLayer2 = document.getElementById("emojiLayer2");
const copyBtn = document.getElementById("copyBtn");

// Llenar los select con todos los emojis
allEmojis.forEach(emoji => {
  let option1 = document.createElement("option");
  option1.textContent = emoji;
  option1.value = emoji;
  emoji1Select.appendChild(option1);

  let option2 = document.createElement("option");
  option2.textContent = emoji;
  option2.value = emoji;
  emoji2Select.appendChild(option2);
});

// Función para actualizar el mash
function updateMash() {
  emojiLayer1.textContent = emoji1Select.value;
  emojiLayer2.textContent = emoji2Select.value;
}

// Eventos de selección
emoji1Select.addEventListener("change", updateMash);
emoji2Select.addEventListener("change", updateMash);

// Copiar al portapapeles
copyBtn.addEventListener("click", () => {
  const mashText = emoji1Select.value + emoji2Select.value;
  navigator.clipboard.writeText(mashText)
    .then(() => alert("¡Emoji mash copiado al portapapeles!"))
    .catch(() => alert("Error al copiar"));
});
