let config = {
    BLOGPOSTS_PATH: "blog-posts",
    BIO_PATH: "bio",
    CONTACTINFORMATION_PATH: "contact-information"
}

config.API_URL = process.env.NODE_ENV === 'development' ? "http://localhost:1337/" : "https://shrouded-reaches-27000.herokuapp.com/"

export default config;