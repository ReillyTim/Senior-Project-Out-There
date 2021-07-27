import Avatar from '@material-ui/core/Avatar';
import React, {useState} from 'react';
import "./DMS.css";

function DMS() {
    const [messages] = useState([
        {name: 'John Doe', 
        image: '...',
        message: 'Hello 👋'}
    ])


    return (
        <div className="DMS">
            <p className="DMS__Match">You Found Someone Out There!</p>
            {messages.map((message) => (
                <div className="DMS__message">
                    <Avatar className="DMS__img" src={message.image} alt={message.name} />
                    <p classname="DMS__text">{message.message}</p>
                </div>
                ))}


    <form className="text__input">
        <input className="text__field"
        type="text" />
        <button className="send__it">Send</button>
    </form>

        </div>
    );
}



export default DMS