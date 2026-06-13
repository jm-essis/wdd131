// Mobile Menu

const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Last Modified

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// Trail Data (Objects inside an Array)

const trails = [

{
    id: 1,
    name: "Kakum Forest Trail",
    difficulty: "Moderate",
    distance: 2.8,
    location: "Central Region",
    image: "images/trail1.jpg"
},

{
    id: 2,
    name: "Aburi Mountain Trail",
    difficulty: "Easy",
    distance: 2.1,
    location: "Eastern Region",
    image: "images/trail2.jpg"
},

{
    id: 3,
    name: "Atewa Forest Path",
    difficulty: "Hard",
    distance: 6.4,
    location: "Eastern Region",
    image: "images/trail3.jpg"
},

{
    id: 4,
    name: "Volta Ridge Walk",
    difficulty: "Easy",
    distance: 1.9,
    location: "Volta Region",
    image: "images/trail4.jpg"
},

{
    id: 5,
    name: "Mole Savannah Route",
    difficulty: "Moderate",
    distance: 4.5,
    location: "Northern Region",
    image: "images/trail5.jpg"
},

{
    id: 6,
    name: "Boti Falls Trail",
    difficulty: "Easy",
    distance: 2.3,
    location: "Eastern Region",
    image: "images/trail6.jpg"
}

];


// Display Function

function displayTrails(trailsList) {

    const container =
    document.querySelector("#trail-container");

    container.innerHTML = "";

    trailsList.forEach(trail => {

        container.innerHTML += `

        <article class="trail-card">

            <img
            src="${trail.image}"
            alt="${trail.name}"
            loading="lazy">

            <h3>${trail.name}</h3>

            <p><strong>Difficulty:</strong>
            ${trail.difficulty}</p>

            <p><strong>Distance:</strong>
            ${trail.distance} miles</p>

            <p><strong>Location:</strong>
            ${trail.location}</p>

        </article>
        `;
    });
}


// Filter Function

function filterTrails(level) {

    if (level === "all") {

        displayTrails(trails);

    } else {

        const filteredTrails =
        trails.filter(trail =>
        trail.difficulty === level);

        displayTrails(filteredTrails);
    }
}


// Event Listener

const difficulty =
document.querySelector("#difficulty");

difficulty.addEventListener("change", () => {

    filterTrails(difficulty.value);

});


// Initial Display

displayTrails(trails);