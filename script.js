const diaryContainer = document.getElementById("diaryContainer");

const TOTAL_DAYS = 30;

for(let day = 1; day <= TOTAL_DAYS; day++){

    const card = document.createElement("div");

    card.classList.add("day-card");

    if(day === 1){

        card.innerHTML = `
            <h3>Day 1</h3>
            <p>MVC Architecture & Introduction</p>

            <a href="Diary/Day1.html">
                <button class="day-btn">
                    View Entry
                </button>
            </a>
        `;
    }
    else{

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