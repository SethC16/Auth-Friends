import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendList from './FriendList';

const NewFriend = (props) => {
    const [ people, setPeople] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth().get('/api/friends', people)
            .then( res => {
                console.log('this is the data', res.data)
                setPeople(res.data)
            })
            .catch( err => {
                console.log(err)
            });
    }, [])

    
        return (
            <div>
                <h1>My Friends List</h1>
                {people.map( friend => {
                    return (
                        <div className='friends'>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
}

export default NewFriend;
