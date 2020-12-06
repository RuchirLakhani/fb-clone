import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({image, profilepic, username, message, timestamp}) {
    return (
        <div className='post' >

            <div className='post_top'>
                <Avatar src={profilepic} className='post_avatar'/>
                <div className='post_topInfo'>
                <h3>{username}</h3>
             <p>{new Date (timestamp?.toDate()).toUTCString()}</p>

                </div>

            </div>
        <div className='post_bottom'>
        <p>{message}</p>




        </div>

        <div className='post_image'>

            <img src={image} />


        </div>

        <div className='post_options' >

            <div className='post_option' >
                <ThumbUpAltOutlinedIcon />
                <p>Like</p>
            </div>

            <div className='post_option' >
                <ChatBubbleOutlineOutlinedIcon />
                <p>Comment</p>
            </div>

            <div className='post_option' >
                <NearMeOutlinedIcon />
                <p>Share</p>
            </div>

            <div className='post_option' >
                <AccountCircleOutlinedIcon />
                <ExpandMoreIcon />
            </div>





        </div>


            
        </div>
    )
}

export default Post
