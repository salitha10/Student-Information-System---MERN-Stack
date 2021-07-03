import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AllStudents(){


    //Data
    const [students, setStudents] = useState([]);

    useEffect(()=>{

        //Get data
        const getStudents = () =>{
            axios.get("http://localhost:5000/student").then((res)=>{
            setStudents(res.data);
            });
        }


        getStudents();


    }, []);



    return (
        
        <div>
           <ul>
               {students.map(student => <li> {student.name} </li>)}
           </ul>
        </div>
    );
}