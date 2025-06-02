document.addEventListener("DOMContentLoaded", async () => {
  const map = L.map('map').setView([17.9869, -94.5561], 14); // Minatitlán, Veracruz


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  try {
    const res = await fetch("http://localhost:5000/combis");
    const combis = await res.json();

    combis.forEach(combi => {
      L.marker([combi.lat, combi.lng])
        .addTo(map)
        .bindPopup(`Combi Línea: ${combi.linea}`);
    });

  } catch (error) {
    console.error("Error al cargar combis:", error);
  }
});
