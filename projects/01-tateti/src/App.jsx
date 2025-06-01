import { useState } from 'react'
import confetti from 'canvas-confetti'

import { checkWinnerFron, checkEndGame } from './logic/board'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { Tablero } from './components/Tablero'

import { TURNS } from './constants'

import './App.css'

function App () {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem('board')
    return boardLocalStorage ? JSON.parse(boardLocalStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    return turnLocalStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinnerFron(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1> Ta Te Ti </h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <Tablero board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
};

export default App
