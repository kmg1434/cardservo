import { SCRYFALL_BASE_URL } from "../_lib/constants";

// convert decklist string to card data 
export async function getDeckList(deckList: string): Promise<Card[]> {

    const multiverseIds: Array<number> = deckList.split(',').map(num => parseInt(num, 10));

    // const tempMultiverseIds: Array<number> = [6556, 666, 667];

    // create request body object based on array of multiverse id numbers
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

    const data = await response.json();
    const cardData = data.data;

    console.log("RESPONSE FROM SCRYFALL: ", cardData);

    return cardData;
}
