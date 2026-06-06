// Product Array (Mock data structure based on course requirements)
const products = [
  { id: "fc-1020", name: "flux capacitor", averagerating: 4.5 },
  { id: "bc-1999", name: "power converter", averagerating: 3.9 },
  { id: "nv-9910", name: "warp drive", averagerating: 5.0 },
  { id: "rr-0001", name: "low-frequency laser", averagerating: 4.1 },
  { id: "sq-1010", name: "warp core", averagerating: 3.5 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    // Dynamically populate the select options
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Array id used for value
        option.textContent = product.name.toUpperCase(); // Array name field used for display text
        productSelect.appendChild(option);
    });

    // Populate common footer dates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});