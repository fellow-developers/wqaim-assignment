import React from "react";
import "./Post.css";

export const Post = ({id, title}) => {
    return (
        <div className="post">
            <h1 className="title">{title}</h1>
        </div>
    );
}