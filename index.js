const dateInput = document.getElementById("fecha-agenda");
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;
dateInput.value = today;