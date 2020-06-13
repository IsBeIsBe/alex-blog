import { config } from '../Constants'

var Client = require('node-rest-client').Client;

var client = new Client();

client.registerMethod("getBlogPosts", config.url.API_URL_BLOGPOSTS, "GET");
client.registerMethod("getBio", config.url.API_URL_BIO, "GET")
client.registerMethod("getContactInformation", config.url.API_URL_CONTACTINFORMATION, "GET")

export default client;