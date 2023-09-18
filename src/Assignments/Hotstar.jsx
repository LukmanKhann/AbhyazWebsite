import style from "./hotstar.module.css"
const Hotstar =()=>{
    return(
        <div>
            <section id={style.nav}>
                <div id={style.logo}>
                    <a href="">☰</a>
              <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
                </div>
                
                <div id={style.navbar}>
                
                    <ul>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Disney+</a></li>
                        <li><a href="#"><img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="" /></a></li>
                    </ul>
                </div>
                <div id={style.search}>
                    <input type="Search" placeholder="Search" className={style.whitetext}/>
                    <button >SUBSCRIBE</button>
                    <button id={style.login}>LOGIN</button>
                </div>
            </section>
            <main id={style.body}>
                <button>Get Ready</button>
            </main>

        </div>
    )
}
export default Hotstar