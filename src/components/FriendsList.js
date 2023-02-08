import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

import NewPost from "./NewPost";

export const token = localStorage.getItem("token")

export default function FriendsList (props) {

    const [friends, setFriends] = useState([])
    const { push } = useHistory()

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
                push("/")
            })
    }

    useEffect( () => {
        getFriends()
    }, [])

    return (
        <div className="Friends">
            < NewPost />
            
            <div id="friend-wrap" className="main">
            <h2>Friends List</h2>
                <ul className="list" >
                   {friends.map( friend => {
                       return (
                       <span className="friend" key={ friend.id }>{ friend.name }
                        <li>{ friend.email }</li>
                       </span>
                    
                       )
                   })}
                </ul>
            </div>
        </div>
    )
}