import React from "react";

import Friend from './Friend'


export default function FriendsResult({friends}) {

    return <ul>
    {
    friends.map(friend => <Friend key={friend.id} friend={friend.receiver} />)
    }
    </ul>;
}