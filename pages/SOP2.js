import React from 'react'
import Link from 'next/link'
export const sop2 = () => {
    return (
        <>
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
    <section className="title">
        <div className="myproj">Project</div>
        <span>
            <p>12th I.T.</p>
        </span>
    </section>
    <section className="SOPin">
        <h1><span>SOP 2</span> : <b>Create a webpage using HTML and CSS code to design a web page as the layout
                displayed below.</b>
            <p className="psop">

                The top section will display the heading , ‘Tourist places’ in header. The
                section on the left has list of cities. The right hand side displays tourist places
                of any one of the city . <br/>
                Use Inline style sheet in the top section to display background color for the
                text ‘Tourist places’. Use internal stylesheet for the left and right section
                with background color and font styles.
                <br/>
            </p>
            <div className="imagesop">
                <b>Output :</b>
                <img src="Screenshot 2022-08-06 104110.png" alt="pagr112"/>
            </div>
        </h1>
        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python"><br/>
<span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>SOP2<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Style<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">header</span>{<span className="token function "> color: #ff2249 ; width: 100% ; height: 40% ;</span>}<br/>
<span className="token keyword">section</span>{<span className="token function "> background-color: yellow ; width: 50% ; height: 20% ; float: left ;</span>}<br/>
<span className="token keyword">aside</span>{<span className="token function "> background-color: pink ; width: 50% ; height: 20% ; float: right ;</span>}<br/>
<span className="token keyword">{'<'}</span>/Style<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Header<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>H1 style=" background-color: skyblue " align="center"<span className="token keyword">{'>'}</span>Tourist Places<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Header<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Section<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>B<span className="token keyword">{'>'}</span>City<span className="token keyword">{'<'}</span>/B<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>ol<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Banglore<br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Hyderabad<br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Delhi<br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Pune<br/>
<span className="token keyword">{'<'}</span>/ol<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Section<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Aside<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>B<span className="token keyword">{'>'}</span>Tourist places in pune<span className="token keyword">{'<'}</span>/B<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>ul<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Shaniwarwada<br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Kelkar Museum<br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Sinhgad Fort<br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Pune<br/>
<span className="token keyword">{'<'}</span>/ul<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Aside<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/html<span className="token keyword">{'>'}</span><br/>
                </code></pre>
            <div className="toolbar">
                <div className="toolbar-item"><button className="copy-to-clipboard-button" type="button"
                        data-copy-state="copy"><span>Copy</span></button></div>
            </div>
        </div>
    </section>
    <section className="pervi">
                <Link href="/SOP1"><a>SOP 1</a></Link>
                <Link href="/SOP2"><a>SOP 2</a></Link>
                <Link href="/SOP3"><a>SOP 3</a></Link>
                <Link href="/SOP4"><a>SOP 4</a></Link>
                <Link href="/SOP5"><a>SOP 5</a></Link>
            </section>
            <footer className="footer">
                <div className="right">
                    <img className="logoin" src="logo.jpg" alt="logo"/>
                    <h1 className="head3">SunnyCode</h1>
                    <p>Copyright &#169; 2022 Sunny_Code.in</p>
                </div>
                <div className="left">
                    <div className="fa fa-icon">
                        <a href="https://www.instagram.com/sunnyprajapati_s5/"><i className="fa fa-instagram " aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter " aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-github " aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-facebook " aria-hidden="true"></i></a>
                    </div>
                </div>
            </footer>
    </>
    )
}

export default sop2;