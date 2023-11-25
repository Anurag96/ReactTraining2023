import React from 'react'
import Child from './Child'

function Parent() {
    const data = {
        age: 21,
        name: 'anurag',
        job: 'software developer'
    }
    const num = [3, 8, 11, 7, 5];
    const data1 = [{
        age: 21,
        name: 'anurag',
        job: 'software developer'
    }, {
        age: 22,
        name: 'Ravi',
        job: 'hardware developer'
    }]

    const users = [
        {
            name: "Jesse",
            age: 21,
            height: "1.90cm"
        },
        {
            name: "Tom",
            age: 25,
            height: "1.67cm"
        },
        {
            name: "Anna",
            age: 34,
            height: "1.59cm"
        }, {
            name: "Jesse",
            age: 21,
            height: "1.90cm"
        },
        {
            name: "Tom",
            age: 25,
            height: "1.67cm"
        },
        {
            name: "Anna",
            age: 34,
            height: "1.59cm"
        }
    ]
    return (
        <div>
            <Child data={data} num={num} data1={data1} users={users} />
        </div>
    )
}

export default Parent
