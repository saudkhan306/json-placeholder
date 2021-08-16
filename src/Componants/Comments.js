import React from 'react'

function Comments({commentData}) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h6 className="card-title">
                    {commentData.name}
                    &nbsp;&nbsp; | &nbsp;&nbsp;
                    {commentData.email}
                </h6>
                <p className="card-text">{commentData.body}</p>
            </div>
        </div>
    )
}

export default Comments;
