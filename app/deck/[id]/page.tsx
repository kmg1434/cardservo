import React from 'react'

const Deck_Page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <h1>Deck_Page</h1>
      <div>Details of Deck {params.id}</div>
    </div>
  )
}

export default Deck_Page