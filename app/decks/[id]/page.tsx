import prisma from '@/app/_lib/db'
import { DeckBody } from '@/app/components/deck-body'
import { DeckHeader } from '@/app/components/deck-header'
import Navbar from '@/app/components/nav-bar'
import { getDeckList } from '@/app/services/scryfall'
import { Deck } from '@prisma/client'
import React from 'react'

const DeckDetailsPage = async ({ params }: { params: { id: string } }) => {

  const deck : Deck | null = await prisma.deck.findUnique({
    where: {
      id: params.id
    },
    select: {
      id: true,
      title: true,
      authorId: true,
      cardList: true,
      format: true,
      public: true,
      createdAt: true,
      updatedAt: true
    }
  })

  // console.log("deck: ", deck);

  let deckDTO: DeckDTO;

  if (!deck) {
    return (
      <div>Deck not found</div>
    )
  } else {
    // deckDTO = toDeckDTO(deck);
  }

  // getDeckList(deckDTO.cardList);

  return (
    <div>
      <Navbar />
      {/* <DeckHeader deck={deckDTO}/>
      <DeckBody deck={deckDTO} /> */}
      <h1>Deck Details Page</h1>
      <h2>{}</h2>
      {/* <div>Details of Deck {deck.id}</div> */}
    </div>
  )
}

export default DeckDetailsPage