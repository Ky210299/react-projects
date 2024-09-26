
export const getImg = async (fact, fetchError) => {
  if (fact === null || fetchError !== null) return
  if (typeof fact !== 'string') throw new Error('fact must be a string');

  const firstWord = fact.split(' ').slice(0, 3).join(' ');

  try {
    const res = await fetch(`https://cataas.com/cat/says/${firstWord} ? size = 50 & color=red`);
    const { url } = res;
    return { success: true, url: url }

  } catch (err) {
    return { success: false, error: err }
  }
};
