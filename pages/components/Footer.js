import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
const Footer = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <footer className="footer">
                <div className="right">
                    <Image className="logoin" src="/logo.jpg" alt="This is my image" height="50"
                        width="50" />
                    <h1 className="head3">SunnyCode</h1>
                    <p>Copyright &#169; 2022 Sunny_Code.in</p>
                </div>
                <div className="left">
                    <div className="fa fa-icon">
                        <Link href="https://www.instagram.com/sunnyprajapati_s5/"><a><i className="fa fa-instagram " aria-hidden="true"></i></a></Link>
                        <Link href="https://www.freelancer.com/u/sunnypraja5"><a><i className="fa fa-code " aria-hidden="true"></i></a></Link>
                        <Link href="https://github.com/sunnycode9325"><a><i className="fa fa-github " aria-hidden="true"></i></a></Link>
                        <Link href=""><a><i className="fa fa-facebook " aria-hidden="true"></i></a></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer