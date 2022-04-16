import React, { useState } from "react";

import '../Styles/NewPost.css';

const NewPost = () => {

    const handleChange = (e) => {
        // setCreatePost({
        //     ...createPost,
        //     [ e.target.name ] : e.target.value
        // });
    }

    const onSubmit = (e) => {
        
    }

    return (
        <div className = 'new-post'>
            <form className = 'new-post-form'>
            <div className = 'title'>
                <h1>Create a New Post</h1>
            </div>
                <label>Title: 
                    <input 
                        type = 'text'
                        name = 'title'
                        // value = { createPost.title }
                        maxLength = '30'
                        onChange = { handleChange }
                    />
                </label>

                <label>Post: 
                    <textarea 
                        type = 'text'
                        name = 'post'
                        // value = { createPost.post }
                        onChange = { handleChange }
                    />
                </label>

                <label>Tags: 
                    <input 
                        type = 'text'
                        name = 'tags'
                        // value = { createPost.tags }
                        onChange = { handleChange }
                    />
                </label>
            </form>
        </div>
    )
}

export default NewPost;