var Client = require('node-rest-client').Client;

var client = new Client();

client.registerMethod("getBlogPosts", "https://shrouded-reaches-27000.herokuapp.com/blog-posts", "GET");



export default client;