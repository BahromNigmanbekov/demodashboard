import { Link, NavLink } from "react-router-dom"
import "./Forms.css"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";



function Forms() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="container">
                <div className="big-box">
                    <div className="logoo">
                        <span className="span-by">by</span><h3 className="h3-tr">trend</h3>
                    </div>

                    <h2 className="h2-w">Welcome to ByTrend!</h2>

                    <div className="login-logo">
                        <h3 className="h3-login">Already have an account?</h3><span className="span-log"><NavLink to="/login">Login</NavLink></span>
                    </div>

                    <div className="form-e">
                        <h3 className="h3-email">Email</h3>
                        <input className="email-i" placeholder="Demo Email address" type="text" />
                    </div>

                    <div className="form-p" style={{ position: "relative" }}>
                        <h3 className="h3-password">Password</h3>

                        <form className="p-i" action="">
                            <input
                            className="password-i"
                            placeholder="Demo Password"
                            type={show ? "text" : "password"}
                        />

                        <button type="button" className="f-btn" onClick={() => setShow(!show)}>
                            {show ? <FaEye /> : <FaEyeSlash />}
                        </button>
                        </form>
                    </div>



                    <button onClick={() => window.location.href = "/dashboard"} className="cssbuttons-io-button">
                        Get started
                        <div className="icon">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </button>


                </div>
            </div>
        </div>
    )
}

export default Forms
