import Link from "next/link";
import { CardSnippet } from "./card-snippet";

const CardMap = ({ cards }: { cards: Card[] }) => {
  return (
    <section className="container mx-auto pt-4">
      <ul className="flex flex-wrap justify-center">
        {cards.map((card: Card) => (
          <li key={card.id} className="flex pb-4 w-1/6">
            <Link
              href={{
                pathname: `/cards/${card.id}`,
              }}
            >
              <CardSnippet card={card} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardMap;
