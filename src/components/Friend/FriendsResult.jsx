// NPM's
import React from "react";

// Components
import Friend from './Friend'

export default function FriendsResult({friends}) {

    return <ul>
        {
            friends.map(friend => <Friend key={friend.id} friend={friend.receiver} />)
        }
    </ul>;
}