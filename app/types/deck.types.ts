interface Deck {
    owner: string,
    title: string,
    card_list: string,
    id: string
}

interface DeckProps {
    deck: Deck
}