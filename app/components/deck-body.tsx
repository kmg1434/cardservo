import React from 'react'

export const DeckBody = ({ deck }: DeckProps) => {
  return (
    <div className="px-4 py-4">
        <div>{deck.cardList}</div>
    </div>
  )
}
