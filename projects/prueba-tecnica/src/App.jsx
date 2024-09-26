import { useCatImage, useCatFact } from './customHook.jsx';

export function App() {

  const { fact, fetchError, getRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact, fetchError });

  return (
    <>
      <main >
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxwidth: '200px',
          gap: '1rem'
        }} >
          <div>
            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>}
          </div>
          <div >
            {imageUrl && <img src={imageUrl} alt={`An random image fetched from ${imageUrl}`} />}
          </div>
        </section>
        <footer>
          <button type="" onClick={getRandomFact}>Change Fact</button>
        </footer>
      </main>
    </>

  )
}
