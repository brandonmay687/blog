import { getPosts } from "../actions/posts";

const initialState = {
    title: '',
    post: '',
    tags: [],
    likes: 0
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ( getPosts ):
            return action.payload;
        case 'CREATE':
            return state;
        default:
            return state;
    }
};

export default reducer;