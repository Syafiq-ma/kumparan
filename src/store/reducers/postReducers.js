const defaultState = {
    posts:{},
    post:{},
    comment:[]
}

const post= (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_POSTS':
            return{
                ...state,
                posts:action.payload
            }
        case 'GOT_SINGLE_POST':
            return{
                ...state,
                post:action.payload
            }
        case 'GOT_COMMENT':
            return{
                ...state,
                comment:action.payload
            }
        default:
            return state
    }
}

export default post;