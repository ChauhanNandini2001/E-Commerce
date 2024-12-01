import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../components/Authentication/Context';

const Register = () => {
    const { userdata, setUserdata } = useContext(authContext);
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        let obj = {
            fullname,
            email,
            password,
        };
        setUserdata([...userdata, obj]);
        navigate("/");
    };

    return (
        <div className="container my-3 py-3">
            <h1 className="text-center">Register</h1>
            <hr />
            <div className="row my-4 h-100">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form>
                        {/* Full Name Input */}
                        <div className="form-group my-3">
                            <label htmlFor="Name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                placeholder="Enter Your Name"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)} // Update fullname
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-group my-3">
                            <label htmlFor="Email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="Email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-group my-3">
                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password
                            />
                        </div>

                        {/* Link to Login */}
                        <div className="my-3">
                            <p>
                                Already have an account?{" "}
                                <Link to="/" className="text-decoration-underline text-info">
                                    Login
                                </Link>
                            </p>
                        </div>

                        {/* Register Button */}
                        <div className="text-center">
                            <button
                                className="my-2 mx-auto btn btn-dark"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent page reload
                                    handleRegister();
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
