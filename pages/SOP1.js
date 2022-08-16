import React from 'react'
import Link from 'next/link'
export const sop1 = () => {
    return (
        <>
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
                    <b>Create a file &quot;index.html&quot;</b></p></h2>
                <div className="code-toolbar">
                    <pre className="language-python" tabIndex="0"><code className="language-python">
        <span className="token keyword">&#34;</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>V.C.K College <span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta charset=&quot;utf-8&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta name=&quot;author&quot; content=&quot;Physical Tages&quot;<span className="token keyword">{'>'}</span><br/>
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
        <span className="token keyword">{'<'}</span>H1 align=&quot;center&quot;<span className="token keyword">{'>'}</span>VCK College<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>/Br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>P align=&quot;center&quot;<span className="token keyword">{'>'}</span>Vivekanand College , Kolhapur is the best college<span className="token keyword">{'<'}</span>/P<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/Br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>img src=&quot;IMAGE.jpg&quot; alt=&quot;image&quot;<span className="token keyword">{'>'}</span> <br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>a href=&quot;form.html&quot; <span className="token keyword">{'>'}</span>Go to next page<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
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
                    <b>Create a file  &quot;form.html&quot&quot;  </b></p>

                <div className="code-toolbar">
                    <pre className="language-python" tabIndex="0"><code className="language-python">
        <span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>Feedback form<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
        <span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta charset=&quot;utf-8&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Meta name=&quot;author&quot; content=&quot;Physical Tages&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Style<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">Boby</span>{<span className="token function "> background-color: cyon ; color: red;</span>}<br/>
        <span className="token keyword">H1</span>{<span className="token function "> border-style: dashed ;</span>}<br/>
        <span className="token keyword">{'<'}</span>/Style<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>H1 align=&quot;center&quot;<span className="token keyword">{'>'}</span>Feedback Form<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Form name=&quot;F1&quot; align=&quot;center&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        Enter your Name: <span className="token keyword">{'<'}</span>Input type=&quot;text&quot; name=&quot;N1&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        Enter your Email: <span className="token keyword">{'<'}</span>Input type=&quot;email&quot; name=&quot;N2&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        Write your feedback: <span className="token keyword">{'<'}</span>textarea name=&quot;textarea&quot; rows=&quot;5&quot; cols=&quot;20&quot;<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>/textarea<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>Input type=&quot;submit&quot; value=&quot;Submit&quot;<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
        <span className="token keyword">{'<'}</span>a href=&quot;index.html&quot; <span className="token keyword">{'>'}</span>Go to back page<span className="token keyword">{'<'}</span>/a<span className="token keyword">{'>'}</span><br/>
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
            
        </>
    )
}

export default sop1;

