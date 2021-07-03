import React, {useState} from 'react';
import axios from 'axios';

export default function AddStudent(){
 
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");

    function sendData(e){
        e.preventDefault();

        //Data object
        const newStudent = {
            name,
            age,
            gender,
            address
        }

       axios.post('http://localhost:5000/student/add', newStudent).then(()=>{
           alert('Student added');
           setName("");
           setAge("");
           setGender("");
           setAddress("");

        }).catch((err) =>{
            alert('Insert Failed');
        });
}

    return(

<div className="container">

<div className="card" style={{padding:"20px" }}>
    <form onSubmit={sendData}>
        <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name"
            
            onChange={(e)=>{
                setName(e.target.value)
            }}

            ></input>
        </div>

        <div className="form-group">
            <label htmlFor="age">Student Age</label>
            <input type="number"  min="0" step="1" className="form-control" id="age" placeholder="Age"
            
            onChange={(e)=>{
                setAge(e.target.value)
            }}
            
            ></input>
        </div>

        <div className="form-group">
            <label htmlFor="gender">Student Gender</label>
            <input type="text" className="form-control" id="gender" placeholder="Gender"
            
            onChange={(e)=>{
                setGender(e.target.value)
            }}
            
            ></input>
        </div>

        <div className="form-group">
            <label htmlFor="adress">Student Address</label>
            <input type="text" className="form-control" id="address" placeholder="Address"
            
            onChange={(e)=>{
                setAddress(e.target.value)
            }}
            
            ></input>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
</div>

    )
}