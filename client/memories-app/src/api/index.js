import axios from "axios";

const url = "http://localhost:3001/posts"

//api to fetch posts from the server
export const fetchPosts = () => axios.get(url);

//api to send posts from client to server.
export const createPost = (newPost) => {return axios.post(url, newPost)};

export const updatePost = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);

export const deletePost = (id) => {console.log(id); return axios.delete(`${url}/${id}`)};

//export const likePost = (id, likeCount) => {console.log(likeCount); return axios.put(`${url}/${id}`, likeCount)};

export const likePost = (id, updatedPost) => { return axios.put(`${url}/${id}/likepost`, updatedPost)};