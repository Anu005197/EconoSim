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

// Setup Chart.js
const ctx = document.getElementById('economicChart').getContext('2d');
const economicChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{
            label: 'GDP',
            data: [economy.gdp],
            borderColor: 'green',
            fill: false,
        }, {
            label: 'Inflation',
            data: [economy.inflation],
            borderColor: 'red',
            fill: false,
        }]
    }
});

// Update chart data
function updateChart() {
    const time = economicChart.data.labels.length;
    economicChart.data.labels.push(time);
    economicChart.data.datasets[0].data.push(economy.gdp);
    economicChart.data.datasets[1].data.push(economy.inflation);
    economicChart.update();
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
    updateChart();
}, 1000); // Update every second
