import React from "react";
import Navbar from "../components/nav-bar";
import { CardSnippet } from "../components/card-snippet";
import Link from "next/link";
import { searchCards } from "../services/scryfall";
import { SearchBar } from "../components/search-bar";
import { NoCardsFound } from "../components/no-cards-found";
import CardMap from "../components/card-map";

const CardsPage = async ({ searchParams }: { searchParams?: SearchParams }) => {
  const searchBarProps = {
    searchTerm: searchParams?.search as string,
    placeholder: "Search Cards...",
  };

  const cards: Card[] = await searchCards(searchParams?.search as string);

  return (
    <>
      <Navbar />
      <section className="flex p-4 pt-8 justify-center">
        <SearchBar searchBarProps={searchBarProps} />
      </section>
      {cards && cards.length > 0 && <CardMap cards={cards} />}
      {cards === undefined && <NoCardsFound />}
    </>
  );
};

export default CardsPage;
