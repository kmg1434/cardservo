import React from 'react'
import { CardSnippet } from './card-snippet'

export const DeckBody = ({ deck }: DeckProps) => {
  return (
    <div className="flex flex-container px-4 py-4">
      <div className='flex flex-container'>
        {deck.cards.map((card) =>
          <div key={card.id} className=''>
            <CardSnippet card={card} />
          </div>)}
      </div>
    </div>
  )
}
