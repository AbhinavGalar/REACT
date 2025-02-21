import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <nav>
        <ul>
            <li><Link to='/about'>home</Link></li>
            <li>  <Link to='/services'>about</Link></li>
            
            <li>  <Link to='/'>home</Link></li>

        </ul>
        </nav>
        
        </>
    )
}
export default Navbar