import config from "../Constants";

var Client = require('node-rest-client').Client;

var client = new Client();

client.registerMethod("getHomepage", config.API_URL + config.paths.HOMEPAGE, "GET")
client.registerMethod("getBlogPosts", config.API_URL + config.paths.BLOGPOSTS, "GET");
client.registerMethod("getBlogPost", config.API_URL + config.paths.BLOGPOSTS + "/${postId}", "GET")
client.registerMethod("getBio", config.API_URL + config.paths.BIO, "GET")
client.registerMethod("getTopics", config.API_URL + config.paths.TOPIC, "GET")

export default client;
