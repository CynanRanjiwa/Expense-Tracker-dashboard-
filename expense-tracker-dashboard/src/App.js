// src/App.js

import React, { useState } from 'react'; // Importing React and useState hook
import DashboardPage from './pages/DashboardPage'; // Import DashboardPage

function App() {
  // Initial state for transactions. This array will store transaction objects.
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      {/* Main app structure. For now, we will only render the DashboardPage */}
      <DashboardPage transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

export default App;
