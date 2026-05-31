document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
});

function submitForm(event) {
    event.preventDefault();
    alert("¡Cita agendada con éxito!");
    document.getElementById("appointment-form").reset();
}