import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [age,setAge]=useState('')
    const navigate=useNavigate();
    const submit=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5001/createuser',{name,email,phone,age});
        navigate('/')
    }
  return (
    <div className='d-flex vh-100  bg-primary justify-content-center  align-items-center '>
        <div className='w-50 bg-white  rounded  p-3 '>
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' required className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' required className=' form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder='Enter Phone' required className=' form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' required className=' form-control' value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser