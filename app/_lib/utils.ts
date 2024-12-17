export const getCardImageURI = (card: Card, size?: string) => {

    if (isDoubleSided(card)) {
        console.log("is double sided")
        return card.card_faces[0].image_uris.normal;
    }
    return card.image_uris?.normal
}

export const isDoubleSided = (card: Card) => {
    return card.layout === 'transform'|| card.layout === 'modal_dfc';
}