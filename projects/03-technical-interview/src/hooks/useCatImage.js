import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) {
      return
    }
    const firstWord = fact.split(' ')[0]
    const imageUrl = `https://cataas.com/cat/says/${firstWord}`
    setImageUrl(imageUrl)
  }, [fact])
  return { imageUrl }
}
