import React from 'react'
import { saveUser } from './userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
function User() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(saveUser(name));
    };

    const handleChangeName = (text) => {
        setName(text);
    };
    return (
        <div>
            <text>Please enter your username</text>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => handleChangeName(e.target.value)}
                placeholder="Jane Doe"
            />
            <button
                type="submit"
                style={{
                    backgroundColor: name ? "black" : "#cccccc",
                    color: name ? "white" : "black"
                }}
                disabled={!name}
                onClick={handleSubmitForm}
            >
                ENTER
            </button>
            <div>User: {user}</div>
        </div>
    )
}

export default User
