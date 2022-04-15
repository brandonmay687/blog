import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import '../Styles/Posts.css';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <div className = 'posts'>
            <Link to = '/new-post'>Create Post</Link>
            <h1>Posts</h1>
        </div>
    )
}

export default Posts;