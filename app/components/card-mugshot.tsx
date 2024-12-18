import React from "react";
import Image from "next/image";
import { getCardImageURI, isDoubleSided } from "../_lib/utils";

export const CardMugshot = ({ card }: CardProps) => {
  return (
    <div className="flex flex-row shadow-2xl rounded-3xl overflow-hidden">
      <Image
        src={getCardImageURI(card, "large")}
        width={400}
        height={600}
        alt={card.name}
      />
    </div>
  );
};
