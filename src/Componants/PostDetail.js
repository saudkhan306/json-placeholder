import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Comments from './Comments';
import Loader from './Loader';

function PostDetail() {
    const {id} = useParams();
    const [postDetail, setPostDetail] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [isEditable, setIsEditable] = useState(false)

    // Post Details Data
    const getPostDetailApi = () => {
        setLoading(true)
        setTimeout(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
                setLoading(false)
                setPostDetail(response.data)
            }).catch(error => console.log(error))
        },3000)
    }
    const handleEdit = ()=>{
        setIsEditable(!isEditable)
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
        <section>
                <Loader  loading={loading} /> 
                {
                    loading ? '' : 
                <div className="container">
                    <div className="cardDetailContainer p-5">
                        <Link to="/posts" className="btn btn-primary px-3 mb-3">Back</Link>
                        <div className="card bg-light mb-4">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            {
                                isEditable ? 
                                <textarea>
                                    {postDetail.title}
                                </textarea>
                                :
                                <h5 className="card-title">{postDetail.title}</h5>
                            }
                            {
                                isEditable ? 
                                <textarea width='100'>
                                    {postDetail.body}
                                </textarea>
                                :
                                <p className="card-text">{postDetail.body}</p>
                            }
                                <Link to="#" className="btn btn-primary me-2" onClick={handleEdit}>{isEditable ? 'Cancel' : 'Edit Post'}</Link>
                                <Link to="#" className="btn btn-danger">{isEditable ? 'Save' : 'Delete Post'}</Link>
                            </div>
                        </div>
                        { comments.map((comment, index) => <Comments key={index} commentData={comment} />) }
                    </div>                
                </div>
                }
          
        </section>
    )
}

export default PostDetail;
