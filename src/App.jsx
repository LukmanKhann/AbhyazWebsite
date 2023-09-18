import Abhyaz from "./Components/Abhyaz"
import Tesla from "./Assignments/Tesla"
import Hotstar from "./Assignments/Hotstar"
import Spotify from "./Assignments/Spotify28"
import Zee from "./Assignments/Zee5"
import Nav from "./Components/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
const App = () => {
  return (
    <div>
      {/* <Tesla/> */}
      {/* <Abhyaz/> */}
      {/* <Hotstar/> */}
      {/* <Spotify/> */}
      {/* <Zee/> */}
<BrowserRouter>
<Nav/>
<Routes>
 
  <Route path="/" element = {<Home/>}></Route>
  <Route path="/jobs" element = {<Abhyaz/>}></Route>
</Routes>

</BrowserRouter>
      
     {/* <Home/> */}
    </div>
  )
}

export default App