"use server";
import { Deck, Prisma } from "@prisma/client";
import prisma from "../_lib/db";
import { revalidatePath } from "next/cache";


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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        console.log('There is a unique constraint violation, a new user cannot be created with this email')
      }
    }
    console.log(error);
  }

  revalidatePath('/decks');
}

// export async function editDeck(formData: FormData, id: string) {
//   try {
//     const deck = await prisma.deck.create({
//       where: {
//         id: id
//       }
//       data: {
//         title: formData.get("title") as string,
//         author: {
//           connect: {
//             email: "kevin@email.com" // logged in user's email address
//           }
//         },
//         cardList: formData.get("cardList") as string,
//         format: formData.get("format") as string,
//       }
//     })

//   } catch (error) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       if (error.code === 'P2002') {
//         console.log('There is a unique constraint violation, a new user cannot be created with this email')
//       }
//     }
//     console.log(error);
//   }

//   revalidatePath('/decks');
// }