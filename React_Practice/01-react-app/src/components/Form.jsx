import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'abc',
            roll_no: null,
            errorMessage: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        alert(this.state.username + "has been registered successfully")
    }

    myChangeHandler = (event) => {
        //name is key (event.target.name), fieldValue is value (event.target.value)
        let fieldName = event.target.name
        let fieldValue = event.target.value
        let err = ''
        if (fieldName === 'roll_no') {
            if (fieldValue !== "" && !Number(fieldValue)) {
                err = <strong> Your roll number must a number</strong>
            }
        }
        this.setState({ errorMessage: err })
        this.setState({ [fieldName]: fieldValue })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Hello, {this.state.username}</h1>
                <p>Enter the User Name</p>
                <input type='text' name='username' onChange={this.myChangeHandler} />
                <p>Enter the Roll Number</p>
                <input type='text' name='roll_no' onChange={this.myChangeHandler} />
                <p>Enter the username</p>
                <input type='submit' name='submit' />
                <br /><br />
                {this.state.errorMessage}
                <br /><br />
                {this.state.roll_no}
                {this.state.username}

            </form>
        )
    }
}
