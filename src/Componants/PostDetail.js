import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Comments from './Comments';

function PostDetail() {
    const {id} = useParams();
    const [postDetail, setPostDetail] = useState([]);
    const [comments, setComments] = useState([]);

    // Post Details Data
    const getPostDetailApi = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
            setPostDetail(response.data)
        }).catch(error => console.log(error))
    }

    // Comments
    const getPostCommentsApi = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(response => {
            setComments(response.data);
        }).catch(error => console.log(error));
    }

    useEffect(()=> {
        getPostDetailApi();
        getPostCommentsApi();
    }, []);
    return (
        <section className="p-5">
            <div className="container">
                <Link to="/posts" className="btn btn-primary px-3 mb-3">Back</Link>
                <div className="card bg-light mb-4">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{postDetail.title}</h5>
                        <p className="card-text">{postDetail.body}</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                
                { comments.map((comment, index) => <Comments key={index} commentData={comment} />) }
            </div>
        </section>
    )
}

export default PostDetail;
