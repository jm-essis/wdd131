document.addEventListener("DOMContentLoaded", () => {
    const logForm = document.getElementById("trail-log-form");
    const logOutput = document.getElementById("log-output");
    const clearBtn = document.getElementById("clear-log-btn");

    if (!logForm) return; // Execution protection boundary

    // Load initial collection or instantiate state
    let completedHikes = JSON.parse(localStorage.getItem("hikesEngineData")) || [];

    function renderLog() {
        logOutput.innerHTML = "";

        if (completedHikes.length === 0) {
            logOutput.innerHTML = `<p>You haven't logged any trails yet. Get out there and explore!</p>`;
            return;
        }

        // Output loop parsing state collection using template literals
        completedHikes.forEach((hike, index) => {
            const block = `
                <div class="logged-item">
                    <h4>🌲 ${hike.name}</h4>
                    <p>Logged on: ${hike.date} | Tracked Distance: <strong>${hike.distance} miles</strong></p>
                </div>
            `;
            logOutput.insertAdjacentHTML("beforeend", block);
        });
    }

    // Event listener tracking submissions
    logForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("log-name").value;
        const distanceInput = document.getElementById("log-distance").value;

        const dynamicHike = {
            name: nameInput,
            distance: distanceInput,
            date: new Date().toLocaleDateString()
        };

        completedHikes.push(dynamicHike);
        localStorage.setItem("hikesEngineData", JSON.stringify(completedHikes));
        
        logForm.reset();
        renderLog();
    });

    // Clear operation to wipe specific cache data
    clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to wipe your entire trail log history?")) {
            completedHikes = [];
            localStorage.removeItem("hikesEngineData");
            renderLog();
        }
    });

    // Structural execution launch
    renderLog();
});