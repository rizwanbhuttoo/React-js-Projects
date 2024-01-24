import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();
  const navigate=useNavigate()
  const { id } = useParams();



  useEffect(() => {
    axios
      .get("http://localhost:5001/getuser/" + id)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);




  const Update=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:5001/updateuser/" + id,{name,email,phone,age})
    .then((result)=>{
        console.log(result)
        navigate('/')
    })
    .catch(err=>console.log(err))
  }


  return (
    <div className="d-flex vh-100  bg-primary justify-content-center  align-items-center ">
      <div className="w-50 bg-white  rounded  p-3 ">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className=" form-control "
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className=" form-control "
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className=" form-control "
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              className=" form-control "
            />
          </div>
          <button className="btn btn-success" >Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
