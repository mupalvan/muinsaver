const Insta = require('./insta.js');
const client = new Insta.Client();

client.on('connected', () => {
    console.log('I am ready!')
})


client.on('messageCreate', message => {
    message.createMessageCollector(message)
})

client.login('zizifa_2001', 'mumu1379');