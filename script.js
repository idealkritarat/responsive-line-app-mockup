const chatScroll = $("#chat-scroll");
const chatbox = $("#chatbox");

let n = 20;
while(n--){
    const chatClone = $(chatbox).clone();
    $(chatScroll).append(chatClone);
}

const chat = $("#chat");
const message = $("#message");

n = 20;
while(n--){
    const messageClone = $(message).clone();
    $(chat).append(messageClone);
}
