const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {

  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    if (!res.ok) throw new Error('Error fetching data');

    const data = await res.json();

    return { success: true, fact: data }

  } catch (err) {
    return { success: false, error: err };
  }
}

