let myChart = null; // Globális változó a diagramnak

// Családi kedvezmény mezők ki/bekapcsolása
document.getElementById('familyDiscount').addEventListener('change', function() {
    const familyDetails = document.getElementById('familyDetails');
    familyDetails.style.display = this.checked ? 'grid' : 'none';
});

// Negatív érték letiltása a jövedelem mezőnél gépeléskor / módosításkor
document.getElementById('grossAmount').addEventListener('input', function() {
    if (this.value < 0) {
        this.value = 0;
    }
});

// Számítás indítása a gombra kattintva
document.getElementById('calcBtn').addEventListener('click', calculateTax);

function calculateTax() {
    // 1. Bemeneti értékek kiolvasása (negatív érték kiszűrése)
    const incomeType = document.getElementById('incomeType').value;
    let grossAmount = parseFloat(document.getElementById('grossAmount').value) || 0;
    
    // Biztonsági ellenőrzés: ha negatív lenne, 0-ra állítjuk
    if (grossAmount < 0) {
        grossAmount = 0;
        document.getElementById('grossAmount').value = 0;
    }
}