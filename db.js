const messages = [
    {
        id: 1,
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: 2,
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

function getMessages(){
    return messages;
}

function getMessageById(id){
    const message =  messages.find(message => message.id == id);
    if(message) return message;
}

function addMessage(message){
    const id = messages.length+1;
    messages.push({id,...message});
}

export {getMessages, getMessageById, addMessage};