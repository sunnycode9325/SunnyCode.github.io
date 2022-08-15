import React from 'react'
import Link from 'next/link'
export const sop4 = () => {
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
        <h1><span>SOP 4</span> : <b>Creation of website using HTML5 and CSS.</b> 
            <p className="psop">Create a webpage as given layout use nav , header , footer , aside ,
                article with CSS.
                <br/>
            </p>
            <div className="imagesop">
                <b>Output :</b>
                <img src="Screenshot 2022-08-06 125250.png" alt="pagr112"/>
            </div>
        </h1>
        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python">
<span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>SOP4<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Style<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">body</span>{<span className="token function "> background-color: #E7E7E8; margin: 50px;</span>}<br/>
<span className="token keyword">nav,footer</span>{<span className="token function "> background-color: #2E3192; margin: 10px;</span>}<br/>
<span className="token keyword">a,footer</span>{<span className="token function "> color: #fff;</span>}<br/>
<span className="token keyword">a</span>{<span className="token function "> margin: 15px;</span>}<br/>
<span className="token keyword">header h1,p</span>{<span className="token function "> margin: 10px;</span>}<br/>
<span className="token keyword">h1,p</span>{<span className="token function "> margin: 5px;</span>}<br/>
<span className="token keyword">section</span>{<span className="token function "> background-color: #BCBDC0; width: 65%;</span>}<br/>
<span className="token keyword">aside</span>{<span className="token function "> float:right; width: 32.4%; background-color: #BCBDC0;</span>}<br/>
<span className="token keyword">article</span>{<span className="token function "> background-color: #fff; margin: 5px;</span>}<br/>
<span className="token keyword">section,article</span>{<span className="token function "> padding: 10px;</span>}<br/>
<span className="token keyword">{'<'}</span>/Style<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Header<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>H1 className="news"<span className="token keyword">{'>'}</span>News<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>P className="news"<span className="token keyword">{'>'}</span>Local and national news<span className="token keyword">{'<'}</span>/P<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Header<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>nav<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>a href="#"<span className="token keyword">{'>'}</span>Home<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>a href="#"<span className="token keyword">{'>'}</span>Archives<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>a href="#"<span className="token keyword">{'>'}</span>About<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/nav<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>aside<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span>BE A NEWS REPORTER<span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>If you see news happening. Send us a text<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/aside<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>section<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h1<span className="token keyword">{'>'}</span>Local News<span className="token keyword">{'<'}</span>/h1<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span>Fire fighters rescue man from building this is local news 1<span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>(reporter name, date)<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>This is the story text. This is the story text.<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span>This is the detail of recue man. This is the story of how is rescued.<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span>New Library to be built this is local news 2<span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>(reporter name, date)<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>This is the fighter details text. This is the story of fighter<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span>This is the story text. This is the story text.<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/section<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>section<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h1<span className="token keyword">{'>'}</span>National News<span className="token keyword">{'<'}</span>/h1<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span>Snow storm is making travel difficult<span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>(reporter name, date)<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>This is the story snow storm. This is the story distros of storm.<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span>This is the story part continued. This is the story text continued.<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span>Thousands are without power<span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>(reporter name, date)<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>p<span className="token keyword">{'>'}</span>This is the story of not having power. This is the story text continued.<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span>This is the story bad effect. This is the story about destroyer of economy.<span className="token keyword">{'<'}</span>/p<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/article<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/section<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>footer<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>h2<span className="token keyword">{'>'}</span>Footer Information<span className="token keyword">{'<'}</span>/h2<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/footer<span className="token keyword">{'>'}</span><br/>
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

export default sop4;