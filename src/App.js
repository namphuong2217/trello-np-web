import React from "react";

import './App.scss';

// custom components
import AppBar from 'components/AppBar/AppBar';
import BoardBar from 'components/BoardBar/BoardBar';
import BoardContent from 'components/BoardContent/BoardContent';

function App() {
  return (
    <div className="trello-np-app">
      {/* <nav className="navbar app">App Bar </nav> */}
      <AppBar /> 
      {/* <nav className="navbar-board">Board Bar</nav> */}
      <BoardBar />
      <BoardContent />
      {/* <BoardContent /> */}
    </div>
  );
}

export default App;
