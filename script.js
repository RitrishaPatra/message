
const compliments = [
  "You debug problems like a wizard 🧙‍♂️",
  "You're the human version of Ctrl+Z — always fixing things!",
  "You're the reason group projects actually work.",
  "Your brain is 90% code, 10% snacks 🍫",
  "You bring the vibe to every call!",
  "Legend has it you once wrote bug-free code.",
  "You turn chaos into clean commits 🔥",
  "Even Stack Overflow wants your answers.",
  "You're not just a friend — you're an upgrade 💻",
  "Fun fact: You’ve got a 5-star rating in awesomeness ⭐"
];
function revealSurprise() {
  document.getElementById("intro").style.display = "none";     
  document.getElementById("surprise").style.display = "flex";  
}

function openSurprise() {
  document.getElementById("surprise").style.display = "none";  
  const random = Math.floor(Math.random() * compliments.length);
  const chosenCompliment = compliments[random]; 

  const complimentDiv = document.getElementById("compliment");
  complimentDiv.style.display = "block"; 
  complimentDiv.innerHTML = `<p style="font-size: 1.4rem; color: rgb(20, 17, 17); font-family: Courier New, monospace;">💬 ${chosenCompliment}</p>`;
}




