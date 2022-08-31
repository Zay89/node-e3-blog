const uuid = require("uuid");

const postDB = [
    {
        "id": "1",
        "title": "Empire of the sun",
        "content": "Empire of the Sun are an Australian electronic music duo formed in 2007. ... The duo is a collaboration between Luke Steele, of alternative rock band The Sleepy",
        "header_image": "asd",
        "user_id": "uuid",
        "published": true
    },
]

const getAllPosts = () => {
    return postDB
}

const getPostById = (id) => {
    const data = postDB.filter((item) => item.id === id);
    return data.length ? data[0] : false
}

const getLoggedPost= ( user_id, id) => {
    const data = postDB.filter((item) => item.id === id && item.user_id === user_id);
    return data.length ? data[0] : false
}

const getPostByUser = (user_id) => {
    const data = postDB.filter((item) => item.user_id === user_id);
    return data.length ? data : false
}

const createPost = (data) => {
    const newPost = {
        id: uuid.v4(), //obligatorio y unico,
        title: data.title, // obligatorio
        content: data.content, // obligatorio
        header_image: data.header_image ? data.header_image : '', 
        user_id: data.user_id, // obligatorio y unico
        published: true, // obligatorio y por defecto 'true'
    }
    postDB.push(newPost);
    return newPost;
}

const editPost = (id, data) => {
    const index = postDB.findIndex((post) => post.id === id && post.user_id === data.user_id);
    if (index !== -1) {
        postDB[index] = {
            id: id, //obligatorio y unico,
            title: data.title, // obligatorio
            content: data.content, // obligatorio
            header_image: data.header_image, // obligatorio 
            user_id: data.user_id, // obligatorio y unico
            published: data.published, // obligatorio y por defecto 'true'
        }
        return postDB[index];
    } else {
        return createPost(data);
    }
}

const deletePost = (id) => {
    const index = postDB.findIndex(post => post.id === id)
    if (index !== -1) {
        postDB.splice(index, 1)
        return true
    } else {
        return false
    } 
}

module.exports = {
    getAllPosts,
    getPostById,
    getLoggedPost,
    getPostByUser,
    createPost,
    editPost,
    deletePost
}