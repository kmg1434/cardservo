import React from "react";
import Navbar from "../components/nav-bar";
import { CardSnippet } from "../components/card-snippet";
import Link from "next/link";
import { searchCards } from "../services/scryfall";
import { SearchBar } from "../components/search-bar";

const CardsPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {

  const searchBarProps = {
    searchTerm: searchParams?.search as string,
    placeholder: "Search Cards...",
  };

  if (searchParams?.search) {

    const cards: Card[] = await searchCards(searchParams?.search as string);

    if (cards) {
      return (
        <>
          <Navbar />
          <section className="flex p-4 justify-center">
            <SearchBar searchBarProps={searchBarProps} />
          </section>
          <section className="container mx-auto py-4">
            <ul className="flex flex-wrap justify-center">
              {cards.map((card: Card) => (
                <li key={card.id} className="flex min-w-10">
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
