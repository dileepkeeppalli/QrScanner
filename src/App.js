import React, { useState } from 'react';

import AppBar from './components/AppBar'
import QrScanner from './components/QrScanner'

import './App.css';

function App() {

  const [showScanner, SetShowScanner] = useState(true)
  const [scanData, setScanData] = useState("")
  
  const handleSuccessScan = (data) => {
    SetShowScanner(false)
    setScanData(data)
  }

  const handleFailureScan = () => {
    alert("Failure")
  }


  return (
    <div className="App">
      <AppBar />
      {showScanner ? 
         <QrScanner successScan={handleSuccessScan} failureScan={handleFailureScan}/> : 
         <div>Successfully Scanned : {scanData}</div>
      }
    </div>
  );
}

export default App;
