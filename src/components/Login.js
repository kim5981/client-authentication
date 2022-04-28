import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { loginUrl } from "../App";

export default function Login () {

    const login = ({ username, password }) => {
        axios.post("http://localhost:9000/api/login", { username, password })
          .then(res => {
            debugger
            // //store token in browser local storage 
            // const token = res.data.token
            // window.localStorage.setItem("token", token)
            // //redirect to friends list
          })
          .catch(err => {
            debugger // to do: render err message on screen
          })
      }

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
        // take username + password and post it to api 
        // and redirect to friends list
        login(formVals)
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