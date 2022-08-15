import React from 'react'
import Link from 'next/link'
export const sop3 = () => {
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
        <span><p>12th I.T.</p></span>
    </section>
    <section className="SOPin">
        <h1><span>SOP 3</span>  : <b>Create a website using HTML and CSS code to design webpages as
            follows -</b><p className="psop"><b>1. </b>
                The first webpage will accept the name of the traveller, date of travel ,
                telephone number . It also has submit button as an image . <br/>
                <b>Create a file  "SOP3.html"  </b><br/></p></h1>
        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python">
<span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>Head<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>Make my Trip<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span>  <br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>link rel="stylesheet" type="text/css" href="style.css"<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>H1 align="center"<span className="token keyword">{'>'}</span>Make my Trip<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>Form name="F1" align="center"<span className="token keyword">{'>'}</span> <br/>
Name of traveller : <span className="token keyword">{'<'}</span>Input type="text" name="N1"<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
Date of travel: <span className="token keyword">{'<'}</span>Input type="date" name="N2"<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
Telephone Number : <span className="token keyword">{'<'}</span>Input type="number" name="N3"<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>/textarea<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>Input type="image" value="Submit"<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>a href="secondepage.html"<span className="token keyword">{'>'}</span>Click here to view transporter's in formation<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Form<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Body<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Html<span className="token keyword">{'>'}</span> <br/>
                </code></pre>
            <div className="toolbar">
                <div className="toolbar-item"><button className="copy-to-clipboard-button" type="button"
                        data-copy-state="copy"><span>Copy</span></button></div>
            </div>
        </div>
    </section>
    <section className="SOPin">
        <p className="psop"><b>2. </b>The second webpage has information about the name of transporter, time ,
            seat no and destination displayed one below the other in the form of unordered
            list as <br/>
            Name of transporter – Air Asia <br/>
            Time - 09:30 am <br/>
            Seat no – B39 <br/>
            Destination - Delhi <br/>
            Both pages should be interlinked. Create external stylesheet with relevant
            tags.<br/>
            <b>Create a file  "secondepage.html"  </b></p>

        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python">
<span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>Head<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>Make my Trip<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span>  <br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>link rel="stylesheet" type="text/css" href="style.css"<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>H1 align="center"<span className="token keyword">{'>'}</span>Make my Trip<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>ul style="list-style: circle;"<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Name of transporter – Air Asia <br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Time - 09:30 am <br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span> Seat no – B39 <br/>
<span className="token keyword">{'<'}</span>li<span className="token keyword">{'>'}</span>  Destination - Delhi <br/>
<span className="token keyword">{'<'}</span>/ul<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>a href="SOP3.html" <span className="token keyword">{'>'}</span>Click here to go back <span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Body<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>/Html<span className="token keyword">{'>'}</span> <br/>
                </code></pre>
            <div className="toolbar">
                <div className="toolbar-item"><button className="copy-to-clipboard-button" type="button"
                        data-copy-state="copy"><span>Copy</span></button></div>
            </div>
        </div>
    </section>

    <section className="SOPin">
        <p className="psop"><b>3. </b> CSS <br/>
            <b>Create a file  "style.css"  </b></p>
        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python">
H1<span className="token keyword"> {'{'}</span>color: red ;<span className="token keyword">{'}'}</span><br/>
Body<span className="token keyword"> {'{'}</span>background-color: pink ;<span className="token keyword">{'}'}</span><br/>
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

export default sop3;