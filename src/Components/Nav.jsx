import { Link } from "react-router-dom"
import style from "./abhyaz.module.css"
const Nav = () => {
  return (
    <div>
        <section className={style.body}>
        <div id={style.logo}>
          <img src="https://www.abhyaz.com/Abhyaz.logo.jpg" alt="" />
        </div>
        <div id={style.navbar}>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/jobs'}>About us</Link></li>
            <li><Link to={'/jobs'}>Solution</Link></li>
            <li><Link to={'/jobs'}>Career</Link></li>
            <li><Link to={'/jobs'}>Contact</Link></li>
          </ul>
        </div>
        <div id={style.searchbar}>
          <input type="search" name="" id="" placeholder="Search"  /> <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
          {/* <a href=""><i className="fa-solid fa-user fa-xl"></i></a>
          <a href=""><i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></a> */}
        </div>
      </section>
      
    </div>
  )
}

export default Nav