import { DeckBody } from '@/app/components/deck-body'
import { DeckHeader } from '@/app/components/deck-header'
import Navbar from '@/app/components/nav-bar'
import React from 'react'

const DeckDetailsPage = ({ params }: { params: { id: number } }) => {

  const deck: Deck = {
    owner: "Kevin",
    title: "Some Izzet Combo Deck",
    cardList: "izzet charm, sol ring, reverberate",
    id: "1",
  }

  return (
    <div>
      <Navbar />
      <DeckHeader deck={deck}/>
      <DeckBody deck={deck} />
      <h1>Deck Details Page</h1>
      <h2>{}</h2>
      <div>Details of Deck {params.id}</div>
    </div>
  )
}

export default DeckDetailsPage