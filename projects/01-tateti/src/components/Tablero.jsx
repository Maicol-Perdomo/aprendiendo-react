import { Square } from './Square'

export const Tablero = ({ board, updateBoard }) => {
  return (
    <section className='game'>
      {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
            }
    </section>
  )
}
