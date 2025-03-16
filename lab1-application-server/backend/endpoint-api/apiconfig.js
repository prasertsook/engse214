var apiconfig = {
    development: {
        serverKey: '1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h',
        parse_server: {
            hosturl  : 'https://localhost:4000/api',
            wsurl    : 'wss://localhost:4000',
            masterKey     : 'wallboardapi',
            clientKey     : 'wallboardapi',
            javascriptKey : 'wallboardapi',
            appId : "wallboardapi"
        },
        ssl_path: "./"
    },
    production: {
        serverKey: '1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h',
        parse_server: {
            hosturl  : 'https://localhost:4000/api',
            wsurl    : 'wss://localhost:4000',
            masterKey     : 'wallboardapi',
            clientKey     : 'wallboardapi',
            javascriptKey : 'wallboardapi',
            appId : "wallboardapi"
        },
        ssl_path: "/etc/ssl"
    },

};
module.exports = apiconfig;