import React, { useState } from 'react';
import { connectWallet, sendUnshielded } from '@midnight-ntwrk/midnight-mcp';

export default function App() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    const wallet = await connectWallet();
    await sendUnshielded({
      from: wallet.address,
      to: address,
      amount: parseInt(amount)
    });
    alert('Transferred!');
  };

  return (
    <div>
      <h1>Unshielded Token dApp</h1>
      <input placeholder="To Address" value={address} onChange={e => setAddress(e.target.value)} />
      <input placeholder="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}