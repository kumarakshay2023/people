import React from 'react';
import { Cardlist } from '../component/card-list/card-list';

let people = require('../people.json');
export const Friends = ()=> {
    people = people.filter(people => {
        let balance = getIntFromComma(people.balance);
        return (balance <2000 && people.isActive === false);
    })

    return (
    <div>
        <h1>Friends</h1>
            <Cardlist people = {people} showFriends= {true}> </Cardlist>
    </div>)
}

function getIntFromComma(s) {
    s = s.replace(/,/g, '').replace('$', ''); // 1125, but a string, so convert it to number
    s = parseFloat(s, 10);
    return s;
  }