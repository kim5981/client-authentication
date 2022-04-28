import React from "react";

export default function FriendsList () {
    return (
        <div className="Friends">
          <div className='nav'>
            <h3> friends database </h3>
            <nav>
                <a href="/">login</a>
                <a href="/friends">friend list</a>
                <a href="/addfriend">add friend</a>
                <a href="/logout">logout</a>
            </nav>
            </div>
            <div className="main">
                <h1>Friend List</h1>
                <ul className="list">
                    <li> 
                        I&apos;m a friend! + friend@email.com
                    </li>
                    <li> 
                        I&apos;m a friend! + friend@email.com
                    </li>
                    <li> 
                        I&apos;m a friend! + friend@email.com
                    </li>
                    <li> 
                        I&apos;m a friend! + friend@email.com
                    </li>
                </ul>
            </div>
        </div>
    )
}