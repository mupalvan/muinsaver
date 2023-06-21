const Insta = require('./insta.js');
const client = new Insta.Client();

function sendMessageToUser(chaID, message, type){
    client.fetchChat(chaID).then((chat) => {
        try{
            if(type=='image'){
                chat.sendPhoto(message);
                try {
                    fs.rmdirSync('./files/'+chaID, { recursive: true });
                }catch (err) {}
            }else{
                chat.sendMessage(message);
            }
        }catch(err){}
    });
}

client.on('connected', () => {
    console.log('I am ready!')
})


client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.reply(message.chat[0]);
      }
})

client.login('zizifa_2001', 'mumu1379');