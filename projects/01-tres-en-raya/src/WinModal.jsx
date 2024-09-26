import { Square } from './Square.jsx'

export function WinModal({ winner, resetGame }) {
  if (winner === null) return

  return (
    <section className='winner' >
      <div className='text'>
        <h2> Win:</h2>
        <header className='win'>
          <Square>{winner}</Square>
        </header>
        <footer>
          <button onClick={resetGame}>Reset Game</button>
        </footer>
      </div>
    </section>
  )

}
