import { Deck, Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialDecks: Prisma.DeckCreateInput[] = [
  {
    title: "Some Crazy Izzet Combo Shenanigans",
    author: {
      connectOrCreate: {
        where: {
          email: "kevin@email.com"
        }, 
        create: {
          email: "kevin@email.com",
          firstName: "Kevin",
          lastName: "Grady"
        }
      }
    },
    cardList: "[87,7654,14876,654,90]",
    format: "Commander",
    public: true
  },
  {
    title: "Some Abzan Pile",
    author: {
      connectOrCreate: {
        where: {
          email: "kevin@email.com"
        }, 
        create: {
          email: "kevin@email.com",
          firstName: "Kevin",
          lastName: "Grady"
        }
      }
    },
    cardList: "[876,546,5436,576,1]",
    format: "Commander",
    public: true
  }
];

async function main() {
  console.log(`Start seeding ...`);

  for (const decks of initialDecks) {
    const deck = await prisma.deck.create({ data: decks });
    console.log(`Created deck with id: ${deck.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })