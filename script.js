// 1. Cambiar texto al hacer clic
const changeTextBtn = document.getElementById("changeTextBtn");
const textToChange = document.getElementById("textToChange");

const facts = [
  "🌿 Did you know? Earth’s atmosphere extends over 10,000 km into space.",
  "🌊 About 96.5% of Earth’s water is in its oceans.",
  "🌋 Earth’s rotation is gradually slowing down by about 17 milliseconds every 100 years.",
  "🌱 More than 8.7 million species live on our planet — and counting!",
  "🌤️ From space, Earth appears mostly blue because of its water and atmosphere."
];

changeTextBtn.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  textToChange.textContent = randomFact;
});

// 2. Verificar si el usuario ingresó su nombre
const form = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name 🌎");
  } else {
    alert(`Hello, ${name}! Welcome to Planet Earth — enjoy your visit! 🌍`);
  }
});

// 3. Cambiar el color del fondo
const colorBtn = document.getElementById("colorBtn");
const colors = ["#e0f7fa", "#fce4ec", "#fff9c4", "#dcedc8", "#d1c4e9", "#f8bbd0", "#bbdefb"];

colorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
