import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios"
import { token } from "./FriendsList"

export default function AddFriend () {

    const { push } = useHistory();

    const labelStyle = {
        fontWeight: "bold"
    }

    const initialFormVals = {
        name: "",
        email: ""
    }

    const [ formVals, setFormVals ] = useState(initialFormVals);

    const onChange = evt => {
        const { id, value } = evt.target
        setFormVals({
            ...formVals,
            [id]: value
        })
    }

    const submit = evt => {
        evt.preventDefault()
        axios.post("http://localhost:9000/api/friends", formVals, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                push("/friends")
                
            })
            .catch(err => {
                debugger
            })
        }

    return (
        <>
      <div className="main" id="add-friend">
        <h1> ADD FRIEND </h1>
        <form>

          <label style={ labelStyle }> 
          FRIEND NAME
          <input
            type="text"
            maxLength={30}
            value={ formVals.name }
            onChange={ onChange }
            id="name"
          />
          </label>
          
          <label style={ labelStyle }> 
          FRIEND EMAIL
            <input
              type="email"
              maxLength={30}
              value={ formVals.email }
              onChange={ onChange }
              id="email"
            />
          </label>
          
          <button className="loginBtn" onClick={ submit }>ADD</button>
        </form>
      </div>
        </>
    )
}