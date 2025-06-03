import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Para recuperar la cita al cargar la apgina
  useEffect(refreshRandomFact, [])
  return { fact, refreshRandomFact }
}
