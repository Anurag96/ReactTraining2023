import React from 'react'

function Forms() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email Name</label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Major</label>
                    <input type="text" class="form-control" id="exampleInputMajor" placeholder="Enter Major" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Forms
