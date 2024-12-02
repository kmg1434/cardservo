import { Deck } from "@prisma/client";
import prisma from "../_lib/db";
import { toDeckDTO } from "../types/adapters/deck-adapter";


export async function getDeck(id: string) {
  // const deck = await prisma.deck.findUnique({
  //   where: {
  //     id: id
  //   },
  //   select: {
  //     id: true,
  //     owner: true,
  //     title: true,
  //     cardList: true,
  //     format: true,
  //     public: true,
  //     createdAt: true,
  //     updatedAt: true
  //   }
  // })

  // let deckDTO: DeckDTO;
  
  // if (deck) deckDTO = deck.map(deck =>
  //   toDeckDTO(deck)
  // );

  // return deckDTO;
}