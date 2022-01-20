import axios from 'axios';

const host = 'https://jsonplaceholder.typicode.com';

const API = {
    getPosts: (success) => {
        axios.get(`${host}/posts`)
        .then(res => {
            success(res);
        });
    },
    getSingleUser: (id, success) => {
        axios.get(`${host}/users/${id}`)
        .then(res => {
            success(res);
        });
    },
    getSinglePost: (id,success) => {
        console.log(id)
        axios.get(`${host}/posts/${id}`)
        .then(res => {
            success(res);
        });
    },
    getComment: (id,success) => {
        axios.get(`${host}/comments`, {params:{postId:id}})
        .then(res => {
            success(res);
        });
    },
}

export default API;