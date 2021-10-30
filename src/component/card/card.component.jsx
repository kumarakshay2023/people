import React from 'react';
import './card.style.css';
export const Card = props => (
    <div className="card-container">
        <h2>{props.people.name}</h2>
        <h4>{props.people.balance}</h4>
        {props.showFriends ?
            <ul>
                {props.people.friends.map((value) => (
                    <li>{value.name}</li>
                ))}
            </ul> : ''
        }
    </div>
);