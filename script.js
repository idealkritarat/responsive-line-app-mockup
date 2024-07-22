const chatScroll = $("#chat-scroll");
const chat = $("#chat");

let n = 20;
while(n--){
    const chatClone = $(chat).clone();
    $(chatScroll).append(chatClone);
}