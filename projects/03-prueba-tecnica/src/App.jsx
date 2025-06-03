import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=redcat?json=true`

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClic = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App prueba</h1>
      <button onClick={handleClic}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`image extracted using the first trhee words for ${fact}`} />}
      </section>
    </main>
  )
}
