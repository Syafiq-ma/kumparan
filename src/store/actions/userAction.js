import API from '../../utils/api';

export const getSingleUser = (id) => {
    return  (dispatch) => {
       API.getSingleUser(id,res => {
           dispatch({
               type: 'GOT_SINGLE_USER',
               payload: res.data,
           })
       })
    }
}