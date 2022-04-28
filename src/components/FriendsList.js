import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios"

export const token = localStorage.getItem("token")

export default function FriendsList () {
    
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: token
            }
        })
            .then(res => {
               setFriends(res.data)
            })
            .catch(err => {
                debugger
            })
    }

    useEffect( () => {
        getFriends()
    }, [])

    return (
        <div className="Friends">
            <div className="main">
                <h1>Friend List</h1>
                <ul className="list" >
                   {friends.map( friend => {
                       return (
                       <li key={ friend.id }>{ friend.name } -- { friend.email }</li>
                       )
                   })}
                </ul>
            </div>
        </div>
    )
}