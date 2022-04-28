import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { loginUrl } from "../App";

export default function Login () {

const initialFormVals = {
    username: "",
    password: "",
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
        // take username + password and post it to api 
        // and redirect to friends list
        axios.post("http://localhost:9000/api/login", formVals)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        
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
        <a href="/friends">friend list</a>
        <a href="/addfriend">add friend</a>
        <a href="/logout">logout</a>
      </nav>
      </div>
      
      <div className="main" id="login">
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
          
          <button className="loginBtn" onClick={ submit }>SUBMIT</button>
        </form>
      </div>
      </>
    )
}