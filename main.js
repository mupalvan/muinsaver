const Insta = require('./insta.js');
const client = new Insta.Client();

client.on('connected', async () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
    client.on('pendingRequest', async data => {
      try{
        client.on('messageCreate', msg => {
            if (msg.content === 'ping') {
              msg.reply('Pong!');
            }
          });
      }catch(err){}
    });
});



client.login('zizifa_2001', 'mumu1379');