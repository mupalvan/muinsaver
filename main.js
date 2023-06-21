const Insta = require('./insta.js');
const client = new Insta.Client();

client.on('connected', () => {
    console.log('I am ready!')
})


client.on('messageCreate', message => {
    
    if (message.content === 'ping') {
        message.reply(message)
    }
})

client.login('zizifa_2001', 'mumu1379');