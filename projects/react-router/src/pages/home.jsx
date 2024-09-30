import { Link } from "../components/Link";

export default function HomePage() {
  return (
    <>
      <h1>React Router</h1>
      <h2>This is the Home</h2>
      <p>This is the Home page</p>
      <Link to='/about'>Go About</Link>
      <br />
      <Link to='/contact'>Go Contact!</Link>
    </>
  )
}
