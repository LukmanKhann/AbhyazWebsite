import style from "./home.module.css"
import img from "../image/bluebg.png"
import { useNavigate } from "react-router-dom"
const Home = () => {
    let navigate = useNavigate()
    let applyNavigate =()=>{
      navigate('/jobs')
    }
  return (
    <div id={style.kingbox}>
      <div id={style.mainbox}>
      
        <div id={style.leftbox}>
            <h1 id={style.leftheading}>Unlock your potential   with our bootcamp</h1>
              <p id={style.leftpara}>Our expert-led training program covers Zoho's CRM, HR, Marketing, and System Administration Applications & tools. Learn how to use and implement Zoho applications with us.</p>
              <button className={style.lebtn}>Join us</button> <button className={style.lebtn}>Learn More</button>
        </div>
        <div id={style.rightbox}>
            <h1 id={style.headtxt}>A<span className={style.redtxt}>b</span>h<span id={style.yellow}>y</span><span className={style.green_a}>a</span><span className={style.redtxt}>z</span> </h1>
            <p id={style.fromtxt}>from <span  className={style.redtxt} >MTAB</span> Technology Center</p>
            <p id={style.talenttxt}>A <span  className={style.redtxt} >Talent</span> Management Solution</p>

            <h2 id={style.headtxt2}>"Building Learning Organizations Through Digital Transformation"</h2>
            <hr />
            <p id={style.para}>Our Talent Management Platform is designed for organizations & individuals. Organizations can operate remote internships & manage training programs on this platform. Similarly, individuals can enhance their talent by participating in our remote internships & returnships.</p>
            <button className={style.lbtn} onClick={applyNavigate}>Apply Now</button> <button className={style.lbtn}>Refer</button>
        </div>
      </div>
    </div>
  )
}

export default Home