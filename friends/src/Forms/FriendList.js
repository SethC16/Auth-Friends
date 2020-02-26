import React from 'react';

const FriendList = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default FriendList;