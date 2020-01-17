import React from 'react';
import Square from './square.jsx';
import '../index.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (findWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    console.log('squares', squares);
  }

  renderSquare(i) {
    return(
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const winner = findWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return(
      <div>
        <div className="status">
          {status}
        </div>
        <div className="board=row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(13)}
          {this.renderSquare(15)}
        </div>
      </div>
    )
  }
}

const findWinner = (array) => {

  const winningCombos = {
    1: [0, 4, 8, 12],
    2: [1, 5, 9, 13],
    3: [2, 6, 10, 14],
    4: [3, 7, 11, 15],
    5: [0, 5, 10, 15],
    6: [3, 6, 9, 12]
  };

  const xIndex = [];
  const oIndex = [];

  array.forEach((value, index) => {
      if (value === "X") {
          xIndex.push(index);
      }
      if (value === "O") {
          oIndex.push(index);
      }
  })

  for (const i in winningCombos) {
    if (JSON.stringify(winningCombos[i]) === JSON.stringify(xIndex)) {
      return "X";
    }
    if (JSON.stringify(winningCombos[i]) === JSON.stringify(oIndex)) {
      return "O";
    }
  }
  return null;
};


export default Board;