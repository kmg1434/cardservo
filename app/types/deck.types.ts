interface DeckDTO {
    id: string
    owner: string,
    title: string,
    cardList: string,
    format: string,
    createdAt: string,
    updatedAt: string,
}

interface DeckProps {
    deck: DeckDTO
}