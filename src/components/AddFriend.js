import React, { useState } from "react";

export default function AddFriend (props) {

    const labelStyle = {
        fontWeight: "bold"
    }

    const initialFormVals = {
        friendName: "",
        friendEmail: ""
    }

    const [ formVals, setFormVals ] = useState(initialFormVals);

    const onChange = () => {

    }

    const submit = () => {

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
            value={ formVals.friendName }
            onChange={ onChange }
            id="friendName"
          />
          </label>
          
          <label style={ labelStyle }> 
          FRIEND EMAIL
            <input
              type="email"
              maxLength={15}
              value={ formVals.friendEmail }
              onChange={ onChange }
              id="friendEmail"
            />
          </label>
          
          <button className="loginBtn" onSubmit={ submit }>ADD</button>
        </form>
      </div>
        </>
    )
}