import {CREATE, UPDATE, FETCH_ALL, DELETE} from "../constants/actionTypes"
import * as api from "../api";
//import { CREATE, FETCH_ALL } from "../constants/actionTypes";

//Action Creator

 export const getPosts = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});

    } catch (error) {
        console.log(error);
    }
 
};

//Creating an action that makes a post request to the server
export const createPosts = (post) => async(dispatch) =>{
    try {
        console.log(post)
        const {data} = await api.createPost(post);
        console.log(data);
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
};

export const updatePost = (id, updatedPost) => async(dispatch) =>{
    try {
        const {data} = await api.updatePost(id, updatedPost);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
       console.log(error) 
    }
};

export const deletePost = (id) => async(dispatch) =>{
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
};

export const likePost = (id) => async(dispatch) =>{
    try {
       const {data} = await api.likePost(id);
       console.log(data)
       dispatch({type: UPDATE, payload: data}) 
    } catch (error) {
        console.log(error)
    }
}

