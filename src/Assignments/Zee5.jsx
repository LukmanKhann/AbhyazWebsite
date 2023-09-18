import style from "./zee5.module.css"

const Zee5 = ()=>{
   
    return(
        <div>
            <section className={style.body}>
               {/* <img src="https://c4.wallpaperflare.com/wallpaper/746/403/820/tv-show-better-call-saul-bob-odenkirk-jimmy-mcgill-wallpaper-preview.jpg" alt="" /> */}
               
                <div id={style.logo}>
                    <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=3.4.6" alt="" />
                </div>
                <div id={style.navbar}>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Premium</a></li>
                    <li><a href="#">▥</a></li>
                    </ul>
                </div>
                <div id={style.searchbar}>
                    <input type="search" name="" id="" placeholder="▶ Searh for Movies, Shows, Channels etc." className={style.whitetext}/>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/888/888878.png" alt="" /></a>
                    <button id={style.login}>LOGIN</button>
                    <button id={style.plan}>♕ BUY PLAN</button>
                    <a href="#" id={style.line}>☰</a>
                </div>

            </section>
            <section id={style.img}></section>
        </div>
    )
}
export default Zee5