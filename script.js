const diaryContainer = document.getElementById("diaryContainer");
const TOTAL_DAYS = 30;
const btn = document.querySelector('#latestEntryBtn');
const completedEntries = [1,2,3,4,5,6,7,8,9,10];
const COMPLETED_DAYS = completedEntries.length;
const progressPercentage =
    ((COMPLETED_DAYS / TOTAL_DAYS) * 100).toFixed(1);
document.getElementById("completedDays").textContent =
    COMPLETED_DAYS;

document.getElementById("progressText").textContent =
    `${progressPercentage}%`;

document.getElementById("progressBar").style.width =
    `${progressPercentage}%`;
document.getElementById("progressLabel").textContent =
    `${progressPercentage}% Complete`;
btn.setAttribute('href',`diary/day${completedEntries.at(-1)}.html`)
for (let day = 1; day <= TOTAL_DAYS; day++) {

    const card = document.createElement("div");

    card.classList.add("day-card");

    if (completedEntries.includes(day)) {

        card.innerHTML = `
    <h3>Day ${day}</h3>
    <p>Training Entry Available</p>

    <a href="diary/day${day}.html">
        <button class="day-btn">
            View Entry
        </button>
    </a>
`;
    }
    else {

        card.innerHTML = `
            <h3>Day ${day}</h3>
            <p>Entry Pending</p>

            <button class="day-btn" disabled>
                Coming Soon
            </button>
        `;
    }

    diaryContainer.appendChild(card);
}
