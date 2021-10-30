import React from 'react';
import './card-list-style.css';
import { Card } from '../card/card.component';


export const Cardlist = props => (

    <div className='card-list'>
        {
            props.people.map(people => (
                <Card key={people._id} people={people} showFriends ={props.showFriends}/>
            ))
        }
    </div>
);