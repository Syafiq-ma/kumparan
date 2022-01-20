const defaultState = {
    user:{}
}

const user= (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_SINGLE_USER':
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}

export default user;