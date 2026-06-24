const diaryContainer = document.getElementById("diaryContainer");

for(let day = 1; day <= 30; day++) {

    const card = document.createElement("div");

    card.classList.add("day-card");

    card.innerHTML = `
        <h3>Day ${day}</h3>
        <p>Training entry</p>
        <button class="day-btn" disabled>
            Not Available Yet
        </button>
    `;

    diaryContainer.appendChild(card);
}