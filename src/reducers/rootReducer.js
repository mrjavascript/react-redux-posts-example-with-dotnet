const initState = {
    posts: []
}

const rootReducer = (state = initState, action) => {
    // return state;
    console.log("STATE", state)
    console.log("ACTION", action)

    switch (action.type) {

        case "GET_POSTS":

            //  we will implement this!
            return {
                ...state,
                posts: action.payload
            }

        case "ADD_POST":
            //
            //  logic for adding a post
            return state;
        case "EDIT_POST":
            //
            //  logic for editing a post
            return state;
        case "DELETE_POST":
            //
            //  logic for deleting a post
            let newPosts = state.posts.filter(post => post.id !== action.id);
            return {
                ...state,
                posts: newPosts
            }

        default:
            //
            //  no changes
            return state;
    }

}

export default rootReducer;