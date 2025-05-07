// Initial economy state
let economy = {
    gdp: 1000000,
    inflation: 5, // Start inflation at 5% for better visibility
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
        labels: [0], // Start with time label 0
        datasets: [{
            label: 'GDP',
            data: [economy.gdp], // Initial GDP data
            borderColor: 'green',
            fill: false,
            tension: 0.1,  // Smooth the curve
        }, {
            label: 'Inflation',
            data: [economy.inflation], // Initial Inflation data
            borderColor: 'red',
            fill: false,
            tension: 0.1,  // Smooth the curve
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    max: Math.max(economy.gdp, economy.inflation) * 1.1,  // Dynamically scale the y-axis
                }
            }
        }
    }
});

// Update chart data
function updateChart() {
    const time = economicChart.data.labels.length;
    economicChart.data.labels.push(time); // Add new time label for x-axis

    // Add new data for GDP and Inflation
    economicChart.data.datasets[0].data.push(economy.gdp);
    economicChart.data.datasets[1].data.push(economy.inflation);

    // Update the chart to reflect the new data
    economicChart.update();
}

// Simulate economic changes (simulate 2% GDP growth and inflation increase)
function simulateEconomy() {
    economy.gdp *= 1.02; // Simulate 2% GDP growth
    economy.inflation += 0.5; // Increase inflation by 0.5%
    economy.unemployment -= 0.1; // Decrease unemployment by 0.1%
}

// Button Event Listener for Simulate Economy
document.getElementById('simulateEconomy').addEventListener('click', () => {
    simulateEconomy();
    updateDashboard();
    updateChart(); // Update chart after simulating the economy
});

// Interactive Sliders for Inflation, Business Sector, and Debt
document.getElementById('inflationSlider').addEventListener('input', (e) => {
    economy.inflation = parseFloat(e.target.value);
    updateDashboard();
    updateChart(); // Update the chart after adjusting inflation
});

document.getElementById('businessSlider').addEventListener('input', (e) => {
    economy.businessSector = parseFloat(e.target.value);
    updateDashboard();
    updateChart(); // Update the chart after adjusting business sector
});

document.getElementById('debtSlider').addEventListener('input', (e) => {
    economy.governmentDebt = parseFloat(e.target.value);
    updateDashboard();
    updateChart(); // Update the chart after adjusting government debt
});

// Initial Dashboard Update
updateDashboard();
