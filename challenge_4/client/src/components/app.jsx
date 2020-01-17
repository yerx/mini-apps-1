import React from 'react';
import Board from './board.jsx';
import Square from './square.jsx';
import css from '../index.css';

class App extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;