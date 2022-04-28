import React, { useState } from "react";
import styled from "styled-components";

export default function Login () {

    const initialFormVals = {
        username: "",
        password: "",
    }

    const [ formVals, setFormVals ] = useState(initialFormVals);

    

    const onChange = evt => {
        const { id, value } = evt.target
        console.log(value)
        setFormVals({
            ...formVals,
            [id]: value
        }) 
    }
    
      const submit = evt => {
        evt.preventDefault()

    }

    const labelStyle ={
        fontWeight: "bold"
      }

    return (
        <>
        <div className='nav'>
      <h3> friends database </h3>
      <nav>
        <a href="/">login</a>
        <a href="/list">friend list</a>
        <a href="/addfriend">add friend</a>
        <a href="/logout">logout</a>
      </nav>
      </div>
      
      <div id="login">
        <h1> LOGIN </h1>
        <form>

          <label style={ labelStyle }> 
          USERNAME
          <input
            type="text"
            maxLength={15}
            value={ formVals.username }
            onChange={ onChange }
            id="username"
          />
          </label>
          
          <label style={ labelStyle }> 
          PASSWORD
            <input
              type="password"
              maxLength={15}
              value={ formVals.password }
              onChange={ onChange }
              id="password"
            />
          </label>
          
          <button className="loginBtn" onSubmit={ submit }>SUBMIT</button>
        </form>
      </div>
      </>
    )
}