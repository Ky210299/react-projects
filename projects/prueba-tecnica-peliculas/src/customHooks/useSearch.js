import { useRef, useState, useEffect } from 'react';


export function useSearch() {
  const [query, updateQuery] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === '';
      return
    }
    try {
      if (!query) throw new Error('Empty query');
      setError(null);
      return
    } catch (err) {
      return setError(err);
    }
  }, [query])

  return { query, updateQuery, error };
}

