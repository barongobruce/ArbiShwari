ArbiShwari
ArbiShwari is a lightweight arbitrage betting tool designed for the Kenyan market.   It scans odds from multiple bookmakers, detects surebet opportunities, and applies a StakeSplit algorithm to guarantee safe profits.
🚀 Features
- Real-time odds collection (via API & web scraping)
- Event matching (e.g. *Arsenal vs Man Utd*)
- Automatic stake split calculations
- Profit margin filter (only >10% opportunities shown)
- Simple, clean UI:
  - Event
  - Bookmakers & odds
  - Stake amounts per bookmaker
  - Profit percentage
- Alert system (web / SMS / email)

---

🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js + Express (for APIs and WebSocket alerts)  
- Scraping / Data: Puppeteer / Cheerio (scraping odds from local bookies) + optional Odds APIs  
- Database: MongoDB or SQLite (store odds & logs)  

---

⚙️ How It Works
1. Collect odds from Kenyan bookmakers (SportPesa, Betika, OdiBets, etc.)  
2. Normalize odds into a consistent format (decimal)  
3. Detect surebets using arbitrage formulas:
4. Apply StakeSplit algorithm to recommend exact stakes  
5. Show results in UI & send alerts when profit ≥ 10%  

---

 📊 Example Output
Event: Arsenal vs Man Utd  
Bookmakers: SportPesa (2.10) | Betika (2.20)  
Stake A: 476 KES | Stake B: 524 KES  
Profit: ✅ 10.3% guaranteed  

---

🎯 Why ArbiShwari?
Most Kenyan bettors rely on luck. ArbiShwari flips the game— it’s about math, data, and smart betting.  
The goal is to create a calm, calculated way to bet — always *shwari*.  

---

 📩 Alerts
- Get instant notifications when new opportunities appear:
- Web pop-ups
- Email alerts
- Optional SMS alerts (via M-Pesa integrated gateways)

---

 🔮 Future Plans
- Add more bookmakers (local + international)  
- Support for mobile-first UI (progressive web app)  
- Advanced analytics dashboard  
- Community sharing of arbitrage tips  

---

 👨‍💻 Author
Built by **Barongo Bruce** — a Kenyan full stack developer exploring tech in sports betting innovation.  
