import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const API_KEY = "blahblahblacksheep";
const ROOT_URL = "https://reduxblog.herokuapp.com/api/"

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}posts?key=${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    };
}