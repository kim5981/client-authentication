import React, { useEffect, useState } from "react";


const initialFormVals = {
    title: "", 
    text: "",
    mood: ""
}



export default function NewPost (props){

    const [values, setValues] = useState(initialFormVals)

    const { post, publishPost, editPost } = props

    const onChange = e => {
        setValues(...values, e.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        publishPost(values)
        setValues(initialFormVals)
    }

    const isDisabled = () => {
        if(
            values.title.trim() &&
            values.text.trim()
        ){
            return false
        } return true
    }

    const onEnter = (text) => {
        console.log("enter", text)
    }

    useEffect(() => {
        if(post){
            setValues(post)
        } else {
            setValues(initialFormVals)
        }
    }, [post])

    return (
        <div id="post-wrap">

                <h1>Welcome</h1>
                <form id="new-post" onSubmit={ onSubmit }>
                    
                    <textarea
                        maxLength={ 200 }
                        onChange={ onChange }
                        value={values.text}
                        placeholder="How are you feeling today?"
                        id="text"
                    />
                    
                    <div className="dropdown">
                        <input type="checkbox" id="dropdown"/>

                        <label className="dropdown__face" forHTML="dropdown">
                            <div className="dropdown__text">Mood</div>

                            <div className="dropdown__arrow"></div>
                        </label>

                        <ul className="dropdown__items">
                            <li>🙂</li>
                            <li>😺</li>
                            <li>😽</li>
                            <li>😎</li>
                            <li>🤗</li>
                        </ul>
                    </div>
                    
                </form>

                {/* <h4>Your Posts</h4> */}
            </div>
    )
}