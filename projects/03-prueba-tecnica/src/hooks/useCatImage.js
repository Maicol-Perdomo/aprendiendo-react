import { useState, useEffect } from 'react'
import { getCatImage } from '../services/catImage'

// Custom hook permite meter dentro otros hooks
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la iamgen cada vez que tenemos una cita nueva
  // Buena practica: los efectos con una sola responsabilidad
  useEffect(() => {
    if (!fact) return // No se rompe cuando es null al empezar
    getCatImage({ fact }).then(newImageUrl => setImageUrl(newImageUrl))
  }, [fact])

  return { imageUrl }
} // Puede devolver el setImageUrl pero tratar de evitarlo
