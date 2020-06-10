var Client = require('node-rest-client').Client;

var client = new Client();

client.registerMethod("getBlogPosts", "https://shrouded-reaches-27000.herokuapp.com/blog-posts", "GET");
client.registerMethod("getBio", "https://shrouded-reaches-27000.herokuapp.com/bio", "GET")
client.registerMethod("getContactInformation", "https://shrouded-reaches-27000.herokuapp.com/contact-information", "GET")

export default client;