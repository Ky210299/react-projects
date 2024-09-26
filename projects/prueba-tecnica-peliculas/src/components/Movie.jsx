export function Movie({ movie }) {
  const {title, poster, year } = movie;
  return (
    <li>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
      <br />
      <i>{year}</i>
    </li>)
}

