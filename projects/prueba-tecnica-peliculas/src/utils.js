import { OMBD_API_KEY, OMDB_API_URL } from "./constants"

export function getQuery({ title, year, type }) {
  const query = new String().concat(
    OMDB_API_URL,
    OMBD_API_KEY,
    `&s=${title}`
  );
  return query
}
