import React from "react";
import "./Chat.css";
import Messages from "./Messages";

function Chat() {
    return <div className="chat">
        <Messages
        name="John Doe"
        message="Test John"
        profPic= "https://dnadoeproject.org/wp-content/uploads/2018/10/St-Tammany.png"
        timestamp="Now"
        />

        <Messages
        name="Jane Doe"
        message="Test Jane"
        profPic= "https://vanwinefest.ca/wp-content/uploads/bfi_thumb/image-profile-female-200x200-666-clear-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt4fdaucpew0gddo6soycoqwtrhnhaeh2zj8nws.png"
        timestamp="5 Minutes Ago"
        />

    </div>
}

export default Chat;