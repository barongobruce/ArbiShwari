// Mock arbitrage data (later this will come from backend / API)
const arbData = [
  {
    event: "Arsenal vs Man Utd",
    bookmakerA: "SportPesa",
    oddsA: 2.10,
    bookmakerB: "Betika",
    oddsB: 2.20,
    stakeA: 476,
    stakeB: 524,
    profitPercent: 10.3
  },
  {
    event: "Chelsea vs Liverpool",
    bookmakerA: "Odibets",
    oddsA: 1.95,
    bookmakerB: "MozzartBet",
    oddsB: 2.05,
    stakeA: 510,
    stakeB: 490,
    profitPercent: 5.5
  }
];

let minProfit = 10;

function setFilter() {
  const input = document.getElementById("profitFilter").value;
  minProfit = parseFloat(input);
  renderTable();
}

function renderTable() {
  const body = document.getElementById("arbBody");
  body.innerHTML = "";

  arbData.forEach(ar => {
    if (ar.profitPercent >= minProfit) {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${ar.event}</td>
        <td>${ar.bookmakerA}</td>
        <td>${ar.oddsA.toFixed(2)}</td>
        <td>${ar.bookmakerB}</td>
        <td>${ar.oddsB.toFixed(2)}</td>
        <td>${ar.stakeA} KES</td>
        <td>${ar.stakeB} KES</td>
        <td class="${ar.profitPercent >= 0 ? 'profit-positive' : 'profit-negative'}">
          ${ar.profitPercent.toFixed(1)}%
        </td>
      `;

      body.appendChild(tr);
    }
  });
}

// Render table on load
renderTable();

