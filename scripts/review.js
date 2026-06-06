document.addEventListener("DOMContentLoaded", () => {
    // 1. Retrieve current review count from localStorage or initialize to 0
    let reviewCount = localStorage.getItem("reviewsCompleted");
    
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    // 2. Increment the counter by 1
    reviewCount += 1;

    // 3. Save the updated count back to localStorage
    localStorage.setItem("reviewsCompleted", reviewCount);

    // 4. Inject the counter display into the review page UI
    const counterDisplay = document.getElementById("counter-display");
    if (counterDisplay) {
        counterDisplay.textContent = `Total Product Reviews Submitted: ${reviewCount}`;
    }

    // Standard footer modification dates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});