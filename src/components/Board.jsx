import {Square} from './Square.jsx'

export function Board ({board, updateBoard}){

    return (
      <>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </>
    )
}
