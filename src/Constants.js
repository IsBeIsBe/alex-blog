let config = {
    paths: {
        HOMEPAGE: "homepage",
        BLOGPOSTS: "blog-posts",
        BIO: "bio",
        CONTACT_INFORMATION: "contact-information",
        TOPICS: "topics",
    }    
}

config.API_URL = process.env.NODE_ENV === 'development' ? "http://localhost:1337/" : "https://shrouded-reaches-27000.herokuapp.com/"

export default config;