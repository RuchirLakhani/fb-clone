import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useStateValue} from './StateProvider';
import db from "./firebase";
import firebase from "firebase";


function MessageSender() {

    const [{user} , dispatch] = useStateValue();


    const [input,setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')



    const handleSubmit = (e) => {
        
        e.preventDefault();

        db.collection('posts').add({
            image:imageUrl,
            message:input,
            profilePic:user.photoURL,
            timestamp :firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,

        })

        setInput("");
        setImageUrl("");

    } 



    return (
        <div className='messagesender'>

            <div className='message_top'>

                <Avatar src={user.photoURL} />
                <form>
                <input 
                value={input}
                onChange = {(e) => setInput(e.target.value)} 
                className='messagesender_input' placeholder={`What's on your mind ? ${user.displayName}`} />


                <input 
                value={imageUrl}
                onChange = {(e) => setImageUrl(e.target.value)}
                
                className='image' placeholder='image url (optional)'/>

                <button onClick = {handleSubmit}  type='submit'>Hidden Button</button>
                </form>

            </div>

            <div className='message_bottom'>

                <div className='message_option'>
                    <PhotoLibraryIcon style={{color:'green'}} />
                    <h3>Live Video</h3>
                </div>


                
                <div className='message_option'>
                    <VideocamIcon style={{color:'red'}} />
                    <h3>Photos/Videos</h3>
                </div>


                
                <div className='message_option'>
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Feelings</h3>
                </div>




            </div>

            
        </div>
    )
}

export default MessageSender
