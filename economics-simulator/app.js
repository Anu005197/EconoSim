// Initial economy state
let economy = {
    gdp: 1000000,
    inflation: 2,
    unemployment: 5,
    businessSector: 100000,
    governmentDebt: 50000,
};

// Update the Dashboard UI with the current economy state
function updateDashboard() {
    document.getElementById('gdp').textContent = `GDP: ${economy.gdp}`;
    document.getElementById('inflation').textContent = `Inflation: ${economy.inflation}%`;
    document.getElementById('unemployment').textContent = `Unemployment: ${economy.unemployment}%`;
    document.getElementById('businessSector').textContent = `Business Sector: ${economy.businessSector}`;
    document.getElementById('governmentDebt').textContent = `Government Debt: ${economy.governmentDebt}`;
}

// Simulate economic changes
function simulateEconomy() {
    economy.gdp *= 1.02; // Simulate 2% GDP growth
    economy.inflation += 0.1; // Increase inflation by 0.1%
    economy.unemployment -= 0.1; // Decrease unemployment by 0.1%
}

// Button Event Listeners
document.getElementById('increaseInflation').addEventListener('click', () => {
    economy.inflation += 1; // Increase inflation by 1%
    updateDashboard();
});

document.getElementById('increaseInvestment').addEventListener('click', () => {
    economy.businessSector += 50000; // Increase business sector by 50,000
    updateDashboard();
});

// Simulate changes over time
setInterval(() => {
    simulateEconomy();
    updateDashboard();
}, 1000); // Update every second
