import React, { useState } from "react";

import '../Styles/NewPost.css';

const initialCreatePostValues = {
    title: '',
    post: ''
}

const NewPost = () => {
    const [ createPost, setCreatePost ] = useState(initialCreatePostValues);

    const handleChange = (e) => {
        setCreatePost({
            ...createPost,
            [ e.target.name ] : e.target.value
        });
    }

    const onSubmit = (e) => {
        
    }

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