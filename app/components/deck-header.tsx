import React from 'react'

export const DeckHeader = ({ deck }: DeckProps) => {
  return (
    <div className="px-16 py-4 bg-gray-800">
        <h1 className="text-4xl">{deck.title}</h1>
        <h2 className="text-lg px-8">By {deck.owner}</h2>
    </div>
  )
}
