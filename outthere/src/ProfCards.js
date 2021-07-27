import React, { useEffect, useState } from "react";
import UserCard from "react-tinder-card";
import "./ProfCards.css";
import database from "./firebase";


function ProfCards() {
    const [people, setPerson] = useState([]);

    useEffect(()=> {
        //when db updates take new snapshot and set in people array
        const unsub = database
        .collection("people").onSnapshot((snapshot) => (
            setPerson(snapshot.docs.map((doc) => doc.data()))
            ));
        
        return () => {
            unsub();
        };


    }, []);

    return (
        <div>
            <div className="ProfCard__container">

                {people.map((person) => (
                    <UserCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div 
                        style={{ backgroundImage: 'url(${person.url})' }}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </UserCard>
                ))}
            </div>

        </div>
    );
}

export default ProfCards;