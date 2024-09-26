export function DrawModal({ draw, resetGame }) {
  if (!draw) return

  return (
    <section className='winner' >
      <div className='text'>
        <h2>Draw</h2>
        <footer>
          <button onClick={resetGame}>Reset Game</button>
        </footer>
      </div>
    </section>
  )
}
