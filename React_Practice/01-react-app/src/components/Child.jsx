import React from 'react'
import './Child.css'
function Child(props) {
    return (
        <div>
            {props.data.name}<br />
            {props.data.age}<br />
            {props.data.job}<br />
            Array: {props.num.map(e => e)}<br />

            {props.data1.map(e => e.name)}<br />
            {props.data1.map(e => e.age)}<br />
            {props.data1.map(e => e.job)}<br />

            {props.users.map(({ name }) => (name))}
            {props.users.map(({ name }) => (<h6>{name}</h6>))}

            <table>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>{props.users.map(({ name }) => (<h6>{name}</h6>))}</td>
                    <td>{props.users.map(({ height }) => (<h6>{height}</h6>))}</td>
                    <td>{props.users.map(({ age }) => (<h6>{age}</h6>))}</td>
                </tr>
            </table>
        </div>

    )
}

export default Child
