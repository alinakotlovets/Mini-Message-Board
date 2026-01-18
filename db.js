
const id = Date.now() + Math.floor(Math.random() * 1000);

const messages = [
    {
        id: id,
        text: "Hi there!",
        username: "Charles",
        date: new Date()
    },
    {
        id: id+1,
        text: "hello world!",
        username: "Amando",
        date: new Date()
    }
]

export default messages;