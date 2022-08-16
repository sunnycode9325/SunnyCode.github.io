import React from 'react'
import Link from 'next/link'
export const sop5 = () => {
    return (
        <>
    <section className="title">
        <div className="myproj">Project</div>
        <span><p>12th I.T.</p></span>
    </section>
    <section className="SOPin">
        <h1><span>SOP 5</span>  : <b>Use of Audio on web pages using HTML5.</b><p className="psop"><b>1. </b>
            Create a webpage named audio.html to set an audio file in web page with
            controls such that it uses HTML5 elements. The audio file must play as soon
            as the webpage loads in browser and it will start over again, every time
            when it is completed.<br/>
                <b>Create a file  &quot;audio.html&quot;  </b><br/></p></h1>
        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python">
<span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>Audio controls<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>H1 align=&quot;center&quot;<span className="token keyword">{'>'}</span>Audio<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>audio controls<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>source src=&quot;song.mp3&quot; type=&quot;audio/mp3&quot;<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/audio<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Html<span className="token keyword">{'>'}</span><br/>
                </code></pre>
            <div className="toolbar">
                <div className="toolbar-item"><button className="copy-to-clipboard-button" type="button"
                        data-copy-state="copy"><span>Copy</span></button></div>
            </div>
        </div>
    </section>
    <section className="SOPin">
        <p className="psop"><b>2. </b>Create another webpage named audio1.html which provides multiple source
            file formats for the same audio file that plays a sound automatically with
            controls. The browser should display the message with appropriate attribute,
            when audio file is not supported by browser. The code must incorporate the
            list of sound files formats (like wav, MP3 or ogg etc)<br/>
            <b>Create a file  &quot;audio1.html&quot; </b></p>

        <div className="code-toolbar">
            <b>Code :</b>
            <pre className="language-python" tabIndex="0"><code className="language-python">
<span className="token keyword">{'<'}</span>!Doctype HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>HTML<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>title<span className="token keyword">{'>'}</span>Audio controls<span className="token keyword">{'<'}</span>/title<span className="token keyword">{'>'}</span> <br/>
<span className="token keyword">{'<'}</span>head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Head<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>H1 align=&quot;center&quot;<span className="token keyword">{'>'}</span>Audio formats<span className="token keyword">{'<'}</span>/H1<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><span className="token keyword">{'<'}</span>br<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>audio controls autoplay<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>source src=&quot;song.mp3&quot; type=&quot;audio/mp3&quot;<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>source src=&quot;song.ogg&quot; type=&quot;audio/ogg&quot;<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>source src=&quot;song.wav&quot; type=&quot;audio/wav&quot;<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/audio<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Body<span className="token keyword">{'>'}</span><br/>
<span className="token keyword">{'<'}</span>/Html<span className="token keyword">{'>'}</span><br/>
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

export default sop5;