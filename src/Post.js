import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
function Post({username, imageUrl, caption}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar
            className="post__avatar"
            alt="victor"
            src=""
            />
            {/* post header */}
            <h3>{username}</h3>
            </div>
            {/* post image */}
            <img className="post__image" src={imageUrl} alt=""/>
            {/* post footer */}
            <h4 className="post__text"><strong>{username}:</strong>{caption}</h4>
            
        </div>
    )
}

export default Post
