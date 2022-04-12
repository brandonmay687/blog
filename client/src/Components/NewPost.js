import React, { useState } from "react";

import '../Styles/NewPost.css';

const initialCreatePostValues = {
    title: '',
    post: ''
}

const NewPost = () => {
    const [ createPost, setCreatePost ] = useState(initialCreatePostValues);

    

    return (
        <div className = 'new-post'>
            <h1>New Post</h1>
            <form>
                <label>Title: </label>
                <input 
                    type = 'text'
                    name = 'title'

                />
            </form>
        </div>
    )
}

export default NewPost;