import { SCRYFALL_BASE_URL } from "../_lib/constants";

export async function getDeckList(deckList: string): Promise<Card[]> {

    const multiverseIds: Array<number> = deckList.split(',').map(num => parseInt(num, 10));

    const requestBody = {
        identifiers: multiverseIds.map(id => ({ multiverse_id: id }))
    };

    const scryfallCollectionUrl = `${SCRYFALL_BASE_URL}/cards/collection`;

    const response = await fetch(scryfallCollectionUrl, {
        method: 'POST',
        headers: {
            'User-Agent': 'Cardservo/v0.0.1',
            'Content-Type': 'application/json;',
            'Accept': 'application/json;',
        },
        body: JSON.stringify(requestBody)
    })

    const data: { data: Card[] } = await response.json();
    const cardData: Card[] = data.data;

    return cardData;
}

export async function searchCards(searchTerm: string): Promise<Card[]> {

    const scryfallSearchUrl = `${SCRYFALL_BASE_URL}/cards/search?q=${searchTerm}`;

    const response = await fetch(scryfallSearchUrl, {
        method: 'GET',
        headers: {
            'User-Agent': 'Cardservo/v0.0.1',
            'Content-Type': 'application/json;',
            'Accept': 'application/json;',
        },
    })

    const cards: { data: Card[] } = await response.json();

    return cards.data;
}

export async function getCardByMultiverseId(multiverse_id: string): Promise<Card> {

    const scryfallMultiverseIdUrl = `${SCRYFALL_BASE_URL}/cards/multiverse/${multiverse_id}`;

    const response = await fetch(scryfallMultiverseIdUrl, {
        method: 'GET',
        headers: {
            'User-Agent': 'Cardservo/v0.0.1',
            'Content-Type': 'application/json;',
            'Accept': 'application/json;',
        },
    })

    
    const data: { data: Card } = await response.json();

    console.log("data: ", data);

    const card: Card = data.data;

    return card;
}
