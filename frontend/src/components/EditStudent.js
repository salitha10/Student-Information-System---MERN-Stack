import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function AddStudent(){
 
    //Initial values
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");

    //Get id from the url
    let {id} = useParams();
    console.log(id);

        //Data
        const [isFetching, setFetching] = useState(true);

        useEffect(()=>{
    
            //Get data
            const getStudent = () =>{
                axios.get("http://localhost:5000/student/get/"+id).then((res)=>{
                    setFetching(false);
                    setName(res.data.user.name);
                    setAge(res.data.user.age);
                    setGender(res.data.user.gender);
                    setAddress(res.data.user.address);
                    
                }).catch((err)=>{
                    alert('Error fetching data');
                    setFetching(true);
                });
            }
    
            getStudent();
            
        }, []);

        /*const data  = student.map((std) => (
            setName(std.name),
            setAge(std.age),
            setGender(std.gender),
            setAddress(std.address)
        ));*/
   
    function sendData(e){
        e.preventDefault();

        //Data object
        const newStudent = {
            name,
            age,
            gender,
            address
        }
    
        //Send data
        axios.put('http://localhost:5000/student/update/'+id, newStudent).then(()=>{
           alert('Student Updated');
           window.location = "/";

        }).catch((err) =>{
            alert('Update Failed');
        });
}

if(!isFetching){

    return(
        <div className="container">

<div className="card" style={{padding:"20px" }}>
    
    
    <form onSubmit={sendData}>
        <div className="form-group">
            <label htmlFor="name">Student Name</label>
        
        <input type="text" className="form-control" id="name" placeholder="Enter Name" defaultValue={name}
            
            onChange={(e)=>{
                setName(e.target.value)
            }}

            ></input>
   
        </div>

        <div className="form-group">
            <label htmlFor="age">Student Age</label>
            <input type="number"  min="0" step="1" className="form-control" id="age" placeholder="Age" defaultValue={age}
            
            onChange={(e)=>{
                setAge(e.target.value)
            }}
            
            ></input>
        </div>

        <div className="form-group">
            <label htmlFor="gender">Student Gender</label>
            <input type="text" className="form-control" id="gender" placeholder="Gender" defaultValue={gender}
            
            onChange={(e)=>{
                setGender(e.target.value)
            }}
            
            ></input>
        </div>

        <div className="form-group">
            <label htmlFor="adress">Student Address</label>
            <input type="text" className="form-control" id="address" placeholder="Address" defaultValue={address}
            
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

else{
    return(<p>Loading...</p>)
}

}