window.addEventListener("load", function () {
  const message = document.getElementById("welcome-message");
  if (message) {
    message.textContent = "Welcome to my portfolio";
  }
});

const btnChangeText = document.getElementById("btn-change-text");

if (btnChangeText) {
  btnChangeText.addEventListener("click", function () {
    const paragraph = document.getElementById("dynamic-text");

    if (paragraph.textContent.includes("Python")) {
      paragraph.textContent = " My goal is to combine business administration with software development to create innovative solutions.";
      btnChangeText.textContent = "Show original text";
    } else {
      paragraph.textContent = "I am currently strengthening my Python skills.";
      btnChangeText.textContent = "What is my goal?";
    }
  });
}

const btnToggle = document.getElementById("btn-toggle-info");

if (btnToggle) {
  btnToggle.addEventListener("click", function () {
    const extraInfo = document.getElementById("extra-info");

    if (extraInfo.style.display === "block") {
      extraInfo.style.display = "none";
      btnToggle.textContent = "View my skills";
    } else {
      extraInfo.style.display = "block";
      btnToggle.textContent = "Hide skills";
    }
  });
}