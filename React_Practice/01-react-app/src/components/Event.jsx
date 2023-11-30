import React, { Component } from 'react'

export default class Event extends Component {
    constructor() {
        super()
    }
    click() {
        alert('Event Raised')
    }
    render() {
        return (
            <div>
                <button onClick={this.click}>click here</button>
            </div>
        )
    }
}
