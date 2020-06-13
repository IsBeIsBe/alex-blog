import config from '../Constants'

var Client = require('node-rest-client').Client;

var client = new Client();

client.registerMethod("getBlogPosts", config.API_URL + config.BLOGPOSTS_PATH, "GET");
client.registerMethod("getBio", config.API_URL + config.BIO_PATH, "GET")
client.registerMethod("getContactInformation", config.API_URL + config.CONTACTINFORMATION_PATH, "GET")

export default client;