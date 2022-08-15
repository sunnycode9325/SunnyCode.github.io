import React from 'react'
import Link from 'next/link'
export const sop1 = () => {
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
                <h2><span>SOP 1</span>  : <b>Creation of website using HTML5</b><p className="psop">
                    Create a website using HTML5 and CSS using any 4 CSS properties. Write
                    a code for 2 separate pages having different file names such as first page as
                    Index. html and second page as page2.html. Use any theme such as college
                    profile or company profile etc. Every page must contain proper Meta
                    information and design web page as follows-
                    <br/><br/>
                   <b>1.</b> The index page must contain a heading which is highest among other text
                    on pages and must be at centre of the page. There must be a paragraph
                    which introduces general information about the theme chosen must have
                    at least 3 physical style tags and one image with alternate text. This
                    page must be connected to other two pages with proper navigational
                    links.<br/>
                    <b>Create a file "index.html"</b></p></h2>
                <div className="code-toolbar">
                    <pre className="language-python" tabIndex="0"><code className="language-python">
        <span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>V.C.K College <span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta charset="utf-8"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta name="author" content="Physical Tages"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Style<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">Boby</span>{<span className="token function "> background-color: green ;</span>}<br/>
        <span className="token keyword">H1</span>{<span className="token function "> border-style: dotted ;</span>}<br/>
        <span className="token keyword">P</span>{<span className="token function "> color:red ; font-size: 15px ; </span>}<br/>
        <span className="token keyword">b</span>{<span className="token function "> text-decoration: overline ; </span>}<br/>
        <span className="token keyword">P</span>{<span className="token function "> text-align: center ; </span>}<br/>
        <span className="token keyword">img</span>{<span className="token function "> width: 100% ; </span>}<br/>
        <span className="token keyword">{'<'}</span>/Style<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>H1 align="center"<span className="token keyword">{'>'}</span>VCK College<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>/Br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>P align="center"<span className="token keyword">{'>'}</span>Vivekanand College , Kolhapur is the best college<span className="token keyword">{'<'}</span>/P<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/Br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>img src="IMAGE.jpg" alt="image"<span className="token keyword">{'>'}</span> <br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>a href="form.html" <span className="token keyword">{'>'}</span>Go to next page<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/Body<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/html<span className="token keyword">{'>'}</span><br/>
                    </code></pre>
                    <div className="toolbar">
                        <div className="toolbar-item"><button className="copy-to-clipboard-button" type="button"
                                data-copy-state="copy"><span>Copy</span></button></div>
                    </div>
                </div>
            </section>
            <section className="SOPin">
                <p className="psop"><b>2.</b> The 2nd page must contain the feedback or enrolment form related with
                    theme chosen with features of HTML5. The form must contain text element
                    and email address of the company or person. Include the submit button.<br/>
                    <b>Create a file  "form.html"  </b></p>

                <div className="code-toolbar">
                    <pre className="language-python" tabIndex="0"><code className="language-python">
        <span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>Feedback form<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta charset="utf-8"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta name="author" content="Physical Tages"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Style<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">Boby</span>{<span className="token function "> background-color: cyon ; color: red;</span>}<br/>
        <span className="token keyword">H1</span>{<span className="token function "> border-style: dashed ;</span>}<br/>
        <span className="token keyword">{'<'}</span>/Style<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>H1 align="center"<span className="token keyword">{'>'}</span>Feedback Form<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Form name="F1" align="center"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        Enter your Name: <span className="token keyword">{'<'}</span>Input type="text" name="N1"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        Enter your Email: <span className="token keyword">{'<'}</span>Input type="email" name="N2"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        Write your feedback: <span className="token keyword">{'<'}</span>textarea name="textarea" rows="5" cols="20"<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>/textarea<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Input type="submit" value="Submit"<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>a href="index.html" <span className="token keyword">{'>'}</span>Go to back page<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/form<span className="token keyword">{'>'}</span><br/>
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

export default sop1;

