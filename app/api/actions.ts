"use server";
import { Deck, Prisma } from "@prisma/client";
import prisma from "../_lib/db";
import { revalidatePath } from "next/cache";
import { prismaErrorHandler } from "../_lib/prisma-error-handler";


export async function createDeck(formData: FormData) {
  try {
    const deck = await prisma.deck.create({
      data: {
        title: formData.get("title") as string,
        author: {
          connect: {
            email: "kevin@email.com" // logged in user's email address
          }
        },
        cardList: formData.get("cardList") as string,
        format: formData.get("format") as string,
      }
    })

  } catch (error) {
    prismaErrorHandler(error);
  }

  revalidatePath('/decks');
}

export async function editDeck(formData: FormData, id: string) {
  try {
    const deck = await prisma.deck.update({
      where: {
        id: id
      },
      data: {
        title: formData.get("title") as string,
        author: {
          connect: {
            email: "kevin@email.com" // logged in user's email address
          }
        },
        cardList: formData.get("cardList") as string,
        format: formData.get("format") as string,
      }
    })

  } catch (error) {
    prismaErrorHandler(error);
  }

  revalidatePath('/decks');
}

export async function deleteDeck(id: string) {
  try {
    const deck = await prisma.deck.delete({
      where: {
        id: id
      },
    })
  } catch (error) {
    prismaErrorHandler(error);
  }

  revalidatePath('/decks');
}