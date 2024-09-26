import { useEffect, useState } from 'react'
import './App.css'
import { TURNS, checkWinner, checkDraw } from './constants.js';
import { WinModal } from './WinModal.jsx';
import { DrawModal } from './DrawModal.jsx';
import { Square } from './Square.jsx';



export function App() {

  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board');
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn');
    return turnFromLocalStorage ?? TURNS.X
  });
  // null, not winner. false is draw
  const [winner, setWinner] = useState(null)
  const [draw, setDraw] = useState(false)



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setDraw(false)
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    // update the board
    const newBoard = [...board]
    newBoard[index] = turn;

    // set the new board
    setBoard(newBoard)



    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      alert("The winerr is: " + newWinner);
    }

    const isDraw = checkDraw(newBoard);
    if (isDraw) {
      alert("Draw");
      setDraw(true);
    }

    // change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    // save turn
    setTurn(newTurn)
  }

  useEffect(() => {
    // save board
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
    console.log('useEffect');
  }, [turn, board])

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button type="reset" onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
        <WinModal winner={winner} resetGame={resetGame} />
        <DrawModal draw={draw} resetGame={resetGame} />
      </section>

    </main>
  )
}
