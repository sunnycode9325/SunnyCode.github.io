import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The best website is best for 12th students" />
        <meta name="keywords" content="12th it, Sop, 12th it sop, SOP1,SOP2,SOP3,SOP4,SOP5,SOP6,SOP7, IT SOP " />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="/logo.jpg" />
        <title>Sunny_Code</title>
      </Head>

      <header className={styles.stiky}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
          <Link href="/"><a className={styles.span}>Sunny<span>Code</span></a></Link>
          </div>
          <div className="main">
            <ul className={styles.ul}>
              <Link href="/signup"><li className={styles.l3}><a className={styles.a3}>SignUp</a></li></Link>
              <Link href="/login"><li className={styles.l4}><a className={styles.a3}>Login</a></li></Link>            
              </ul>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.sec1}>
          <div className={styles.conainer}>
            <div className={styles.line1}>
              <h1> Welcome To Sunny<span className={styles.span}>Code</span> </h1>
            </div>
            <br />
          </div>
        </section>
        <section className={styles.sec2}>
          <div className={styles.container}>
            <div className={styles.wel2}>
              <div className={styles.welcome}>
                <h1><span className={styles.span}>I'm</span> Sunny Prajapati </h1>
                <p>Confused on which course to take? I have got you covered. Browse courses and find out the best
                  course
                  for you. Its free! SunnyCode is my attempt to teach basics and those coding techniques to
                  people in short time which took me ages to learn.
                </p>

              </div>
            </div>
            <div className={styles.image}>
            </div>
          </div>
        </section>
        <section className={styles.title}>
          <div className={styles.myproj}>Projects</div>
          <p><span className={styles.span}> I.T.</span> </p>
        </section>
        <section className={styles.cosec}>
          <div className={styles.con1}>
            <div className={styles.blogs}>
              <span className={styles.bgm1}>
                <span className={styles.box1}>
                  <img className={styles.pp1} aria-hidden="true"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </span>
              </span>
              <Link href="/SOP1"><a><img className={styles.imgc1} src="img1.jpg" alt="" /></a></Link>
              <div className={styles.text}>
                <span className={styles.s1001}>
                  SOP1
                </span>
                <div className={styles.title2}>
                <Link href="/SOP1"><a href="SOP1.html">Creation of website using HTML5</a></Link>
                </div>
                <p className={styles.para}>Create a website using html5 and CSS using any 4 css properties . Write a code for 2
                  separate page having different file name such.......
                </p>
              </div>
              <div className={styles.btnn}>
              <Link href="/SOP1"><button className={styles.btnn1}><a href="SOP1.html">View</a></button></Link>
              </div>
            </div>
            <div className={styles.blogs}>
              <span className={styles.bgm1}>
                <span className={styles.box1}>
                  <img className={styles.pp1} aria-hidden="true"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </span>
              </span>
              <Link href="/SOP2"><a><img className={styles.imgc1} src="img3.jpg" alt="" /></a></Link>

              <div className={styles.text}>
                <span className={styles.s1001}>
                  SOP2
                </span>
                <div className={styles.title2}>
                  <Link href="/SOP2"><a>Design a web page as the layout displayed.</a></Link>
                </div>
                <p className={styles.para}>
                  The top section will displayed the heading ,'Tourist places' in header. The section on the left
                  has list.....
                </p>
              </div>
              <div className={styles.btnn}>
                <Link href="/SOP2"><button className={styles.btnn1}><a>View</a></button></Link>
              </div>
            </div>
            <div className={styles.blogs}>
              <span className={styles.bgm1}>
                <span className={styles.box1}>
                  <img className={styles.pp1} aria-hidden="true"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />

                </span>
              </span>
              <Link href="/SOP3"><a ><img className={styles.imgc1} src="img4.jpg" alt="" /></a></Link>

              <div className={styles.text}>
                <span className={styles.s1001}>
                  SOP3
                </span>
                <div className={styles.title2}>
                  <Link href="/SOP3"><a>Design a web page as follows -</a></Link>
                </div>
                <p className={styles.para}>The first webpage will accept the name of transporter, Date of travel, telephone
                  number . It also has submit button as an image.
                </p>
              </div>
              <div className={styles.btnn}>
                <Link href="/SOP3"><button className={styles.btnn1}><a>View</a></button></Link>
              </div>
            </div>
            <div className={styles.blogs}>
              <span className={styles.bgm1}>
                <span className={styles.box1}>
                  <img className={styles.pp1} aria-hidden="true"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />

                </span>
              </span>
              <Link href="/SOP4"><a ><img className={styles.imgc1}
                src="https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-1024x683.jpg"
                alt="" /></a></Link>

              <div className={styles.text}>
                <span className={styles.s1001}>
                  SOP4
                </span>
                <div className={styles.title2}>
                  <Link href="/SOP4"><a >Creation of website using HTML 5 and CSS.</a></Link>
                </div>
                <p className={styles.para}>Create a webpage as given layout...
                </p>
              </div>
              <div className={styles.btnn}>
                <Link href="/SOP4"><button className={styles.btnn1}><a>View</a></button></Link>
              </div>
            </div>
            <div className={styles.blogs}>
              <span className={styles.bgm1}>
                <span className={styles.box1}>
                  <img className={styles.pp1} aria-hidden="true"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />

                </span>
              </span>
              <Link href="/SOP5"><a href="SOP5.html"><img className={styles.imgc1} src="img5.jpg" alt="" /></a></Link>

              <div className={styles.text}>
                <span className={styles.s1001}>
                  SOP5
                </span>
                <div className={styles.title2}>
                  <Link href="/SOP5"><a href="SOP5.html">Use of Audio on web pages using html5</a></Link>
                </div>
                <p className={styles.para}>Create a webpage named audio.html to set ana audio file in web page with controls
                  such....
                </p>
              </div>
              <div className={styles.btnn}>
                <Link href="/SOP5"><button className={styles.btnn1}><a href="SOP5.html">View</a></button></Link>
              </div>
            </div>
            <div className={styles.blogs}>
              <span className={styles.bgm1}>
                <span className={styles.box1}>
                  <img className={styles.pp1} aria-hidden="true"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />

                </span>
              </span>
              <a href="/"><img className={styles.imgc1} src="pexels-kaique-rocha-65777.jpg" alt="" /></a>

              <div className={styles.text}>
                <span className={styles.s1001}>
                  SOP6
                </span>
                <div className={styles.title2}>
                  <a href="/">Use of video on web pages using html5.</a>
                </div>
                <p className={styles.para}>Create a webpage named video.HTML to display a video file on web page......
                </p>
              </div>
              <div className={styles.btnn}>
                <button className={styles.btnn1}><a href="">View</a></button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className={styles.sec4}>
        <div className={styles.container}>
            <div className={styles.head2}>
                <h1>Quote's </h1>
            </div>
            <div className={styles.cards1}>
                <div className={styles.info1}>
                    <p>
                        “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” 
                    </p>
                    <div className={styles.name}>– Martin Fowler
                    </div>
                </div>
                <div className={styles.info1}>
                    <p>
                        “Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”
                    </p>
                    <div className={styles.name}>– Antoine de Saint-Exupery</div>
                </div>
            </div>
        </div>
    </section>

    
      <footer className={styles.footer}>
        <div className={styles.right}>
            <img className={styles.logoin} src="logo.jpg" alt="logo"/>
            <h1 className={styles.head3}>SunnyCode</h1>
            <p>Copyright &#169; 2022 Sunny_Code.in</p>
        </div>
        <div className={styles.left}>
            <div className={styles.fa}>
                <a href="https://www.instagram.com/sunnyprajapati_s5/"><i className="fa fa-instagram fa-1.50x" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter fa-1.50x" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-github fa-1.50x" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook fa-1.50x" aria-hidden="true"></i></a>
            </div>
        </div>
    </footer>
    </>
  )
}
