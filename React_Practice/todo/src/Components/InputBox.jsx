import React, { useState } from 'react'

function InputBox({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
         addTask(value);
        setValue("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
        </div>
    );
}

export default InputBox