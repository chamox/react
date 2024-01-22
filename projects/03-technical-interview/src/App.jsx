import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) {
      return
    }
    const firstWord = fact.split(' ')[0]

    const imageUrl = `https://cataas.com/cat/says/${firstWord}`
    setImageUrl(imageUrl)
  }, [fact])
  return (
    <main>
      <h1>My cats app!</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} />}
    </main>
  )
}
