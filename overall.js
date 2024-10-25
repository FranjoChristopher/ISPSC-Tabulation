<script>
// Sample data for winners
const maleWinners = [
    { rank: 1, contestant: "Contestant 1", score: 95 },
    { rank: 2, contestant: "Contestant 2", score: 92 },
    { rank: 3, contestant: "Contestant 3", score: 90 },
];

const femaleWinners = [
    { rank: 1, contestant: "Contestant 5", score: 96 },
    { rank: 2, contestant: "Contestant 6", score: 93 },
    { rank: 3, contestant: "Contestant 7", score: 89 },
];

// Function to populate winners
function populateWinners() {
    const maleWinnersTable = document.getElementById("male-winners-table").querySelector("tbody");
    const femaleWinnersTable = document.getElementById("female-winners-table").querySelector("tbody");

    // Clear existing rows
    maleWinnersTable.innerHTML = '';
    femaleWinnersTable.innerHTML = '';

    // Populate male winners
    maleWinners.forEach(winner => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${winner.rank}</td><td>${winner.contestant}</td><td>${winner.score}</td>`;
        maleWinnersTable.appendChild(row);
    });

    // Populate female winners
    femaleWinners.forEach(winner => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${winner.rank}</td><td>${winner.contestant}</td><td>${winner.score}</td>`;
        femaleWinnersTable.appendChild(row);
    });
}

// Call the function to populate winners on page load
window.onload = function() {
    populateWinners();
    showTab('casual'); // Default to Casual Wear
}
</script>