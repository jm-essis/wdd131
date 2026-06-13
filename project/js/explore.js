// Database Simulation of Trail Objects
const trails = [
    {
        id: 1,
        name: "Whispering Pines Loop",
        difficulty: "Easy",
        distance: "2.4 miles",
        desc: "A soft trail meandering through old pine clearings. Perfect for small children and birdwatching.",
        img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Eagle Crest Ridge",
        difficulty: "Hard",
        distance: "6.8 miles",
        desc: "Steep paths requiring rocky footing. Gives panoramic views across the sweeping northern mountain range.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Mossy River Basin",
        difficulty: "Moderate",
        distance: "4.1 miles",
        desc: "Shaded canopy trek charting alongside cascading water. Cool temperatures year-round.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("trail-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (!grid) return; // Exit if executed on other pages

    // Exclusively building structural output using template literals
    function displayTrails(filteredArray) {
        grid.innerHTML = "";
        
        if (filteredArray.length === 0) {
            grid.innerHTML = `<p>No eco-trails match your filter query.</p>`;
            return;
        }

        filteredArray.forEach(trail => {
            const cardHTML = `
                <article class="trail-card">
                    <img src="${trail.img}" alt="Scenery of ${trail.name}" loading="lazy">
                    <div class="trail-info">
                        <span class="tag">${trail.difficulty}</span>
                        <h3>${trail.name}</h3>
                        <p><strong>Distance:</strong> ${trail.distance}</p>
                        <p>${trail.desc}</p>
                    </div>
                </article>
            `;
            grid.insertAdjacentHTML("beforeend", cardHTML);
        });
    }

    // Event listener processing conditional branches and array filters
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            const selectedDifficulty = e.target.getAttribute("data-difficulty");

            if (selectedDifficulty === "all") {
                displayTrails(trails);
            } else {
                const results = trails.filter(trail => trail.difficulty === selectedDifficulty);
                displayTrails(results);
            }
        });
    });

    // Run primary display on load
    displayTrails(trails);
});