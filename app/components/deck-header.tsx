import React from 'react'

export const DeckHeader = ({ deck }: DeckProps) => {
  return (
    <div className="px-16 py-4 bg-gray-700">
        <h1 className="text-4xl">{deck.title}</h1>
        <h2 className="text-lg px-8">By {deck.owner}</h2>
        <div className="flex flex-row">
            <p className="px-8">{deck.cards.length} cards</p>
            <p className="px-8">{deck.format}</p>
            <p className="px-8">{deck.public ? 'public' : 'private'}</p>
            <p className="px-8">Created on {new Date(deck.createdAt).toLocaleDateString()}</p>
        </div>
    </div>
  )
}
