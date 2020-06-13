const prod = {
    url: {
        API_URL: "https://shrouded-reaches-27000.herokuapp.com/",
        API_URL_BLOGPOSTS: "https://shrouded-reaches-27000.herokuapp.com/blog-posts",
        API_URL_BIO: "https://shrouded-reaches-27000.herokuapp.com/bio",
        API_URL_CONTACTINFORMATION: "https://shrouded-reaches-27000.herokuapp.com/contact-information"
    }
};

const dev = {
    url: {
        API_URL: "http://localhost:1337/",
        API_URL_BLOGPOSTS: "http://localhost:1337/blog-posts",
        API_URL_BIO: "http://localhost:1337/bio",
        API_URL_CONTACTINFORMATION: "http://localhost:1337/contact-information"
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;