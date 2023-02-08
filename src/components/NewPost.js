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
                <h2>Welcome</h2>
                <span>Your Posts</span>
                <form id="new-post" onSubmit={ onSubmit }>
                    {/* <input
                        maxLength={ 80 }
                        onChange={ onChange }
                        value={ values.title }
                        placeholder="Title your post here"
                        id="title"
                    /> */}
                    <textarea
                        maxLength={ 200 }
                        onChange={ onChange }
                        value={values.text}
                        placeholder="How are you feeling today?"
                        id="text"
                    />
                    <label htmlFor="mood">Mood:</label>
                    <select id="mood" name="mood" size={ 16 }>
                        <option value="happy">happy</option>
                        <option value="excited">excited</option>
                        <option value="surprised">surprised</option>
                        <option value="relieved">relieved</option>
                        <option value="nervous">nervous</option>
                        <option value="tired">tired</option>
                        <option value="exhausted">exhausted</option>
                        <option value="bored">bored</option>
                        <option value="awkward">awkward</option>
                        <option value="annoyed">annoyed</option>
                        <option value="confused">confused</option>
                        <option value="disappointed">disappointed</option>
                        <option value="sad">sad</option>
                        <option value="nostalgic">nostalgic</option>
                        <option value="elated">elated</option>
                        <option value="disgusted">disgusted</option>
                    </select>
                </form>
            </div>
    )
}