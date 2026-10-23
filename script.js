let myChart = null; // Globális változó a diagramnak

// Családi kedvezmény mezők ki/bekapcsolása
document.getElementById('familyDiscount').addEventListener('change', function() {
    const familyDetails = document.getElementById('familyDetails');
    familyDetails.style.display = this.checked ? 'grid' : 'none';
});