import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const signup = () => {
    return (
        <div>
            <section className="logsec1">
                <div className="logcard">
                    <div className="imglog">
                    <Image src="/img2.jpg" alt="This is my image" height="532.10"
                        width="800" />
                    </div>
                    <div className="forms">
                        <div className="infoin flexin">
                        <Image className="logoin" src="/logo.jpg" alt="This is my image" height="50"
                        width="50" />
                            <h2 className="comin1">sunny_code.in</h2>
                            <h3 className="comin2">Create an Account!</h3>
                            <div className=" ttin">
                                <span className="text-xs "> SIGNUP WITH EMAIL</span>
                            </div>
                        </div>
                        <form action="post" className="form1 flexin">
                            <div className="floatin">
                                <b>Email Address</b>
                                <input type="email" className="emailin" />
                                <input type="submit" value="create an account" className="emailin font1 hover1" />
                                <Link href="/login"><b className="floatin3 flexin"><a>Or LogIn</a></b></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default signup;



