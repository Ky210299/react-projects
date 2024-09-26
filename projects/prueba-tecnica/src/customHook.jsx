import { useState, useEffect } from "react";
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
export const CAT_IMAGE_PREFIX = 'https://cataas.com/cat/says/';

export function useCatImage({ fact, fetchError }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (fact === null || fetchError !== null) return
    const firstWord = fact.split(' ').slice(0, 3).join(' ');
    fetch(`https://cataas.com/cat/says/${firstWord} ? size = 50 & color=red`)
      .then(res => {
        const { url } = res;
        setImageUrl(url);
      })
  }, [fact])
  return { imageUrl }
}

export function useCatFact() {

  const [fact, setFact] = useState(null);
  const [fetchError, setFetchError] =  useState(null);

  const getRandomFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching data');
        return res.json();
      })
      .then(data => {
        const { fact } = data;
        setFact(fact);
        setFetchError(null);
      })
      .catch(err => {
        setFetchError(err);
        console.log('ERROR -> ', fetchError);
      })
  }
  useEffect(getRandomFact, []);
  return { fact, getRandomFact, fetchError }
}
