import { Deck } from "@prisma/client"
import { getDeckList } from "../services/scryfall"

export async function toDeckWithCardsDTO(deck: Deck) {

    const cardData = await getDeckList(deck.cardList);

    return {
        id: deck.id,
        owner: deck.authorId,
        title: deck.title,
        cards: cardData,
        format: deck.format,
        createdAt: deck.createdAt.toString(),
        updatedAt: deck.updatedAt.toString(),
    }
}