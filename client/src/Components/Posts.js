import React from "react";
import { Link } from "react-router-dom";

import '../Styles/Posts.css';

const Posts = () => {
    return (
        <div className = 'posts'>
            <Link to = '/new-post'>Create Post</Link>
            <h1>Posts</h1>
        </div>
    )
}

export default Posts;