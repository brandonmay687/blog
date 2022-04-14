import React, { useState } from "react";

import '../Styles/NewPost.css';

const initialCreatePostValues = {
    title: '',
    post: '',
    tags: [],
    likes: 0
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
                <label>Title: 
                    <input 
                        type = 'text'
                        name = 'title'
                        value = { createPost.title }
                        maxLength = '30'
                        onChange = { handleChange }
                    />
                </label>

                <label>Post: 
                    <textarea 
                        type = 'text'
                        name = 'post'
                        value = { createPost.post }
                        onChange = { handleChange }
                    />
                </label>

                <label>tags: 
                    <input 
                        type = 'text'
                        name = 'tags'
                        value = { createPost.tags }
                        onChange = { handleChange }
                    />
                </label>
            </form>
        </div>
    )
}

export default NewPost;