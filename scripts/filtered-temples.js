// Footer Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Toggle icon
    if (menuBtn.textContent === "☰") {
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }
});

// 4. Array of Temple Objects (with 3 additional custom additions)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-765878-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-931034-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1029916-wallpaper.jpg"
  },
  // 5. Three more temple objects added
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37-1010569.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-Main-Exterior.jpg"
  }
];

// Target Container & Page Title Header
const templeContainer = document.getElementById("templeContainer");
const galleryTitle = document.getElementById("galleryTitle");

// 6. Function to loop through temples and dynamically generate HTML Cards
function displayTemples(filteredTemples) {
    // Clear out current display
    templeContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        // Create card wrapped inside a semantic figure element matching your setup
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        // Structured inner markup detailing Temple Information
        card.innerHTML = `
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;

        templeContainer.appendChild(card);
    });
}

// Helper utility to parse out the standard 4-digit year value from dedication string
const getYear = (dateString) => parseInt(dateString.split(",")[0].trim());

// 7. Navigation Event Filtering Controls
const filterLinks = document.querySelectorAll("#navMenu a");

filterLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Manage dynamic UI active state
        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const selection = link.textContent.trim();
        let results = [];

        // Apply array filtering options
        if (selection === "Old") {
            results = temples.filter(t => getYear(t.dedicated) < 1900);
            galleryTitle.textContent = "Old Temples";
        } else if (selection === "New") {
            results = temples.filter(t => getYear(t.dedicated) > 2000);
            galleryTitle.textContent = "New Temples";
        } else if (selection === "Large") {
            results = temples.filter(t => t.area > 90000);
            galleryTitle.textContent = "Large Temples";
        } else if (selection === "Small") {
            results = temples.filter(t => t.area < 10000);
            galleryTitle.textContent = "Small Temples";
        } else {
            results = temples; // Home fallback
            galleryTitle.textContent = "Temple Gallery";
        }

        // Re-render display grid with updated filtering list
        displayTemples(results);
        
        // Auto-close hamburger dropdown menu on mobile view selection
        navMenu.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Run initial default display render on page initialization
displayTemples(temples);