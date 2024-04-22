import React, { useState } from 'react'
import Data from './Data'
import './List.css'

const List = () => {

    const [student, setStudent] = useState(Data)
    console.log(student)
    const deleteStudent = () => {
        setStudent([]);
        

    }
    return (
        <div className='wrapper'>
            <h1>Student List</h1>

        <div className='container'>
            
            
                {student.map((student, index) => {
                    const { id, name, age, image } = student;
                    return (
                        <div className='card'>
                            <img src={image} alt="" className='image'/>
                            <div>
                            <li key={id}>{name}</li>
                            <li>{age}</li>
                            </div>
                            
                        </div>



                    )
                })}
              
            
         
        </div>
        <button onClick={deleteStudent}>Clear all</button>
        </div>
    )
}

export default List
