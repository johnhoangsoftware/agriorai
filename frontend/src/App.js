import './App.css';
import React, { useEffect } from 'react';
import suggestWallet from './components/suggestWallet';
import { CosmosBalanceCard } from './components/Navbar';
function App() {

  useEffect(() => {
    suggestWallet();
  });

  return (
    <div className="App">
      <CosmosBalanceCard></CosmosBalanceCard>
    </div>
  );
}

export default App;
