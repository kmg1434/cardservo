interface Deck {
    id: string
    owner: string,
    title: string,
    cardList: string,
}

interface DeckProps {
    deck: Deck
}