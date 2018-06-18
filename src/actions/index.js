import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

const API_KEY = "blahblahblacksheep";
const ROOT_URL = "https://reduxblog.herokuapp.com/api/"

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}posts?key=${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}posts/${id}?key=${API_KEY}`)
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}posts?key=${API_KEY}`, values)
        .then(() => {
            callback();
        });
    return {
        type: CREATE_POST,
        payload: request
    }
}