export const getCatImage = async ({ fact }) => {
  const threeFirstWords = fact.split(' ', 3).join(' ')
  // primeras 3 palabras
  // const tresPalabras = fact.split(' ').slice(0, 3).join(' ')
  const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
