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

// const initialUsers: Prisma.UserCreateInput[] = [
//   {
//     firstName: "Kevin",
//     lastName: "Grady",
//     email: "kevin@email.com",
//     decks: { create: initialDecks }
//   }
// ];

async function main() {
  console.log(`Start seeding ...`);

  for (const decks of initialDecks) {
    const deck = await prisma.deck.create({ data: decks });
    console.log(`Created deck with id: ${deck.id}`);
  }

  // for (const users of initialUsers) {
  //   const user = await prisma.user.create({ data: users });
  //   console.log(`Created user with id: ${user.id}`);
  // }

  console.log(`Seeding finished.`);
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