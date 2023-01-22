import React from "react";
import "./Home.css";
import { Post } from '../../components/post/Post';
import {dummyPosts } from '../../utils/mockGenerator';
import { Header } from '../../components/header/Header';


export const Home = () => {
    return (
        <>
            <Header />
            <div className="post-container">
            <div>Home</div>
            {dummyPosts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} />
            ))}
            </div>
        </>
    );
}