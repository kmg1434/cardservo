import { Deck } from "@prisma/client";

export const toDeckDTO = (deck: Deck): DeckDTO => ({
  id: deck.id,
  owner: deck.owner,
  title: deck.title,
  cardList: deck.cardList,
  format: deck.format,
  createdAt: deck.createdAt.toString(),
  updatedAt: deck.updatedAt.toString(),
});