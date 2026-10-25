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
    
    const under25 = document.getElementById('under25').checked;
    const under30mother = document.getElementById('under30mother').checked;
    const firstMarriage = document.getElementById('firstMarriage').checked;
    const personalDiscount = document.getElementById('personalDiscount').checked;
    const familyDiscount = document.getElementById('familyDiscount').checked;

    let dependents = parseInt(document.getElementById('dependents').value) || 0;
    let beneficiaries = parseInt(document.getElementById('beneficiaries').value) || 0;

    if (dependents < 0) dependents = 0;
    if (beneficiaries < 0) beneficiaries = 0;

    // 2. Adóalap és alap SZJA (15%) meghatározása
    let taxBase = grossAmount;
    
    // Megbízási díjnál 90% a vélelmezett adóalap (10% költséghányad)
    if (incomeType === 'megbizas') {
        taxBase = grossAmount * 0.90;
    }

    let calculatedSzja = taxBase * 0.15;
    let szjaDiscount = 0;
}