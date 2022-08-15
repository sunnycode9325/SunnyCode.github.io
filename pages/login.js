import React from 'react'
import Link from 'next/link'
export const login = () => {
    return (
        <div>
            <header className="stiky">
                <nav className="navbar">
                    <div className="logo">
                        <Link href="/"><a>Sunny<span>Code</span></a></Link>
                    </div>

                    <div className="main">
                        <ul>
                            <Link href="/signup"><li className="l3"><a className="a3" >SignUp</a></li></Link>
                            <Link href="/login"><li className="l4"><a className="a3" >Login</a></li></Link>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="logsec1">
                <div className="logcard">
                    <div className="imglog">
                        <img src="img2.jpg" alt="Login" />
                    </div>
                    <div className="forms">
                        <div className="infoin flexin">
                            <img src="logo.jpg" className="logoincom" alt="logo" />
                            <h2 className="comin1">sunny_code.in</h2>
                            <h3 className="comin2">Your Account!</h3>
                            <div className=" ttin">
                                <span className="text-xs "> LOGIN WITH EMAIL</span>
                            </div>
                        </div>
                        <form action="post" className="form1 flexin">
                            <div className="floatin">
                                <b>Email Address</b>
                                <input type="email" className="emailin" />
                                <b>Password</b>
                                <b className="floatin2"><a href="">Forgot Password?</a></b>
                                <input type="password" className="emailin" />
                                <input type="submit" value="Login" className="emailin font1" />
                                <Link href="/signup"><b className="floatin3 flexin"><a>Or Sign Up</a></b></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="right">
                    <img className="logoin" src="logo.jpg" alt="logo" />
                    <h1 className="head3">SunnyCode</h1>
                    <p>Copyright &#169; 2022 Sunny_Code.in</p>
                </div>
                <div className="left">
                    <div className="fa fa-icon">
                        <a href="#https://www.instagram.com/sunnyprajapati_s5/"><i className="fa fa-instagram fa-1.50x" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter fa-1.50x" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-github fa-1.50x" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-facebook fa-1.50x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </footer>

        </div >
    )
}

export default login;


