import API from '../../utils/api';

export const getPosts = () => {
    return  (dispatch) => {
       API.getPosts(res => {
           dispatch({
               type: 'GOT_POSTS',
               payload: res.data,
           })
       })
    }
}

export const getSinglePost = (id) => {
    return  (dispatch) => {
       API.getSinglePost(id, res => {
           dispatch({
               type: 'GOT_SINGLE_POST',
               payload: res.data,
           })
       })
    }
}

export const getComment = (id) => {
    return  (dispatch) => {
       API.getComment(id, res => {
           dispatch({
               type: 'GOT_COMMENT',
               payload: res.data,
           })
       })
    }
}