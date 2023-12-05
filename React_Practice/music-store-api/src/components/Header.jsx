import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'React App',
            userInput: 'Enter the product to Search'
        }
    }

    inputChanges = (event) => {
        this.setState({ userInput: event.target.value ? event.target.value : 'Enter the product to Search' })
    }

    render() {
        return (
            <div>
                <center>Music Store</center>
                <center>
                    <input type='text' placeholder='Product to search' onChange={this.inputChanges}></input>
                </center>
                {this.state.userInput}
            </div>
        )
    }
}
