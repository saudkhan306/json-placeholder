import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Posts() {    
    const [posts, setPosts] = useState([]);
    const getPostData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            const res = response.data;
            setPosts(res.slice(0, 9));
            console.log(res);
        }).catch(error => console.log(error))
    }
    useEffect(() => getPostData(), []);
    return (
        <section className="postContainer p-5">
            <div className="container">
                <div className="row gy-4">
                    {
                        posts.map((post, index) => {
                            return <div className="col-4" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <Link to={`/posts/${post.id}`} className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>                            
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Posts
