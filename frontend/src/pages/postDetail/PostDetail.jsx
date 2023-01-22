import React from "react";
import "./PostDetail.css";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../utils/mockGenerator";
import { Header } from '../../components/header/Header';

export const PostDetail = () => {
    const { id } = useParams();
    console.log('post id ', id);
    const detail =  getPostDetail(id)[0];
    console.log('detail ', detail);

    return (
        <>
            <Header />
            <div className="post-detail">
                <h1 className="title">{detail.title}</h1>
                <p className="body">{detail.body}</p>
            </div>
        </>
    );
}