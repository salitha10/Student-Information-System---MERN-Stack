import React, {useSate} from 'react'

export default function AddStudent(){

    return(


<div class="container">

<div class="card" style={{padding:"20px" }}>
    <form>
        <div class="form-group">
            <label for="name">Student Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Name"></input>
        </div>

        <div class="form-group">
            <label for="age">Student Age</label>
            <input type="number"  min="0" step="1" class="form-control" id="age" placeholder="Age"></input>
        </div>

        <div class="form-group">
            <label for="gender">Student Gender</label>
            <input type="password" class="form-control" id="gender" placeholder="Gender"></input>
        </div>

        <div class="form-group">
            <label for="adress">Student Address</label>
            <input type="password" class="form-control" id="address" placeholder="Address"></input>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</div>

    )
}