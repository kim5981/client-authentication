import React, { useEffect, useState } from "react";

const initialFormVals = {
    title: "", 
    text: "",
    mood: ""
}

export default function NewPost (props){
    return (
        <div>
                <h2></h2>
                <span>How are you feeling today?</span>
                <form>
                    <input/>
                </form>
            </div>
    )
}