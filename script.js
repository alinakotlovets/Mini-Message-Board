import { prisma } from './lib/prisma.js';

async function main() {
    const message = await prisma.message.create({
        data: {
            text: 'Hello from Prisma!',
            username: 'loveckotiv',
        },
    });
    console.log('Created message:', message)

    const allMessages = await prisma.message.findMany();
    console.log(allMessages);
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
