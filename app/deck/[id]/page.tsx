import Navbar from '@/app/components/nav-bar'
import React from 'react'

const DeckDetailsPage = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <Navbar />
      <h1>Deck_Page</h1>
      <div>Details of Deck {params.id}</div>
    </div>
  )
}

export default DeckDetailsPage