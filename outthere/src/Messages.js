import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import './Messages.css';
import {Link } from "react-router-dom";

function Messages({name, message, profPic, timestamp}) {
    return (

        <Link to={'/chat/${name}'}>
    <div className="messages">
        <Avatar className="chat__image" alt={name} src={profPic}/>
        <div className="chat__information">
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className="chat__time">{timestamp}</p>
    </div>
    </Link>
    );
}

export default Messages;