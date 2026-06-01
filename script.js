// ================= JAVASCRIPT SECTION =================
// JavaScript proves dynamic interaction in this project.

// Feature 1: Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Feature 2: Menu Filter
function filterMenu(category) {
    let menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach(function(card) {
        if (category === "all") {
            card.style.display = "block";
        } else if (card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Feature 3: Reservation Confirmation
function submitReservation(event) {
    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let messageBox = document.getElementById("reservationMessage");

    messageBox.classList.remove("d-none");
    messageBox.innerHTML = "Thank you, " + studentName + " (" + studentId + "). Your reservation request at Arab Restaurant & Cafe has been received successfully.";
}
