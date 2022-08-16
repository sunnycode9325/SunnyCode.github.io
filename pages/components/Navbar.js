// rafce 
import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
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
    </div>
  )
}

export default Navbar ; 
