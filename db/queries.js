import { prisma } from '../lib/prisma.js';

export async function getAllMessages() {
    return await prisma.message.findMany();
}

export async function getMessageByIdFromBd(messageId) {
    const message = await prisma.message.findUnique({
        where: { id: Number(messageId) },
    });
    return message ? [message] : [];
}

export async function addNewMessageToDb(text, username) {
    await prisma.message.create({
        data: { text, username },
    });
}
