interface DeckWithCardsDTO {
    id: string
    owner: string,
    title: string,
    cards: Card[],
    format: string,
    public: boolean | null,
    createdAt: string,
    updatedAt: string,
}

interface DeckProps {
    deck: DeckWithCardsDTO
}