
export default function SearchPage({ routeParams }) {
  return (
    <>
      <h1>Searching</h1>
      <p>Haz buscado:  {routeParams.query}</p>
    </>
  )
}
