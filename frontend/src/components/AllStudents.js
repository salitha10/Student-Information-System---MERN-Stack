import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "../App.css"


export default function AllStudents(){

    //Data
    const [students, setStudents] = useState([]);

    useEffect(()=>{

        //Get data
        const getStudents = () =>{
            axios.get("http://localhost:5000/student").then((res)=>{
            setStudents(res.data);
            }).catch((err)=>{
                alert('Error fetching data');
            });
        }

        getStudents();

    }, []);

    console.log(students);
    
    //Detele
    const deleteStudent = (e) =>{
        let id = e.target.id;
        axios.delete("http://localhost:5000/student/delete/" + id).then((res)=>{
                window.location = "/";
            }).catch((err)=>{
                alert('Error Deleting');
        });
    }

    return (

        <div className="container">
        <div className="card" style={{padding:"20px" }}>
        <table className="table table-striped">
          <thead className="thead-dark">

            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>Address</td>
              <td>Actions</td>
            </tr>

          </thead>

          <tbody>

            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>

                <td>
                <div  className="horizontal">
                <a href={`/update/${student._id}`}>
                <button type="button" className="btn btn-primary" style={{marginRight: "20px"}}>Edit
                </button></a>
                <button type="button" className="btn btn-danger" id={student._id} onClick={deleteStudent}>Delete</button>
                </div>
                </td>
                
              </tr >
            ))}

          </tbody>
        </table>
        </div>
        </div>
    );
}