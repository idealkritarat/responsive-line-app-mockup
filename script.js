const chatScroll = $("#chat-scroll");
const chatbox = $("#chatbox");

let n = 20;
while(n--){
    const chatClone = $(chatbox).clone();
    $(chatScroll).append(chatClone);
}

const chat = $("#chat");
const messageGroup = $("#message-group");


const words =["The sky", "above", "the port","was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less","." ,"I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story","." ,"It", "was", "a pleasure", "to", "burn"];
let time = [7,36];


n = 20;
while(n--){
    const messageClone = $(messageGroup).clone();
    let wrapped_message__count = Math.floor(Math.random() * 3) + 1;
    while(wrapped_message__count--)$(messageClone).find("#message-wrapper").append(new__messageBox());
    $(messageClone).find("#message-wrapper").children().eq(-1).append(new__timestamp());
    $(chat).append(messageClone);
}

$(messageGroup).find("#message-wrapper").append(new__messageBox());

function new__messageBox(){
    return `<div class="flex gap-2 items-end">
                <div id="message-box" class="w-fit bg-[#555] min-h-10 h-fit rounded-[20px] text-white px-3 py-2 text-sm">
                    `+ textgen(Math.floor(Math.random() * 30) + 5)+`
                </div>
            </div>`
    ;
}

function new__timestamp(){
    time[1] += Math.floor(Math.random() * 5) + 1;
    if(time[1]>=60){
        time[0]++;
        time[1]-=60;
    }
    let timestamp = time[0] + ":" + (time[1] < 10 ? "0"+time[1] : time[1]) + " PM";
    return `<span class='text-nowrap text-xs text-[#767778]'>`+ timestamp +`</span>`;
}

function textgen(x){
    let text = [];
    while(--x){
        let new__word = words[Math.floor(Math.random() * words.length)];
        if(new__word=="." && text.length>4)break;
        if(new__word!=".") text.push(new__word);
    }
    return (text.join(" ") + (Math.random() > 0.3 ? "." : "?") );
}
