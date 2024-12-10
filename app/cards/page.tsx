import React from "react";
import Navbar from "../components/nav-bar";
import { CardSnippet } from "../components/card-snippet";
import Link from "next/link";
import { searchCards } from "../services/scryfall";
import { SearchBar } from "../components/search-bar";

const CardsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {

  const searchBarProps = {
    searchTerm: searchParams?.search,
    placeholder: "Search Cards...",
  };

  if (searchParams?.search) {
    const cards: Card[] = await searchCards(searchParams?.search as string);

    if (cards) {
      return (
        <>
          <Navbar />
          {/* <SearchBar searchBarProps={searchBarProps} /> */}
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Title of card page
            </h1>
            <div className="flex">
              {cards.map((card: Card) => (
                <div>
                  multiverse Id: {card.multiverse_id}
                  <Link
                    href={{
                      pathname: `/cards/${card.multiverse_id}`,
                    }}
                  >
                    <CardSnippet key={card.id} card={card} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <SearchBar searchBarProps={searchBarProps} />
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              No Cards Found
            </h1>
          </div>
        </>
      );
    }
  } else {
    // NO SEARCH TERM
    return (
      <>
        <Navbar />
        <SearchBar searchBarProps={searchBarProps} />
      </>
    );
  }
};

export default CardsPage;
