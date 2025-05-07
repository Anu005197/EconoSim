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
    document.getElementById('gdp').textContent = economy.gdp.toFixed(0);
    document.getElementById('inflation').textContent = economy.inflation.toFixed(2) + "%";
    document.getElementById('unemployment').textContent = economy.unemployment.toFixed(2) + "%";
    document.getElementById('businessSector').textContent = economy.businessSector.toFixed(0);
    document.getElementById('governmentDebt').textContent = economy.governmentDebt.toFixed(0);
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

// Simulate economic changes
function simulateEconomy() {
    economy.gdp *= 1.02; // Simulate 2% GDP growth
    economy.inflation += 0.1; // Increase inflation by 0.1%
    economy.unemployment -= 0.1; // Decrease unemployment by 0.1%
}

// Button Event Listener for Simulate Economy
document.getElementById('simulateEconomy').addEventListener('click', () => {
    simulateEconomy();
    updateDashboard();
    updateChart();
});

// Interactive Sliders
document.getElementById('inflationSlider').addEventListener('input', (e) => {
    economy.inflation = parseFloat(e.target.value);
    updateDashboard();
});

document.getElementById('businessSlider').addEventListener('input', (e) => {
    economy.businessSector = parseFloat(e.target.value);
    updateDashboard();
});

document.getElementById('debtSlider').addEventListener('input', (e) => {
    economy.governmentDebt = parseFloat(e.target.value);
    updateDashboard();
});

// Initial Dashboard Update
updateDashboard();
