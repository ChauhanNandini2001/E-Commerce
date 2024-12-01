import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../components/Authentication/Context";

const Login = () => {

  const navigate=useNavigate()
  const {userdata}=useContext(authContext)

  const [usernameLogin, setusernameLogin]=useState("")
  const [passwordLogin, setpasswordLogin]=useState("")
  console.log("userdata",userdata, )

  const handleSubmit=(event)=>{
    event.preventDefault();

    let data= userdata?.filter((ele)=>{
      return ele.email == usernameLogin?.trim() && ele.password == passwordLogin?.trim()
    })

    console.log("userdata",userdata, data)

    if(data.length >0){
      navigate("/home")
    }else{
      alert("User not Registser!")
    }

  }
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e)=>setusernameLogin(e.target.value)}
                  value={usernameLogin}
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  onChange={(e)=>setpasswordLogin(e.target.value)}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={passwordLogin}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" style={{cursor:"pointer"}} onClick={(e)=>handleSubmit(e)} >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
