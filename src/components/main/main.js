import "./main.css";
import Logo from "../logo/logo"
// import Brands from "../brands/brands";
import Photo from "../photo/photo";
import Footer from "../footer/footer";
import {Link} from "react-router-dom"

const Main=()=>{
    return(
<div>
    <div  className='logo'> <Logo/> </div>
    {/* <div className='brands'> <Brands />  */}
        <div className="brand">
            <div className="lishka">
                <ul className="buttons">
                    <li> <Link to="/converse">Converse</Link></li>
                    <li> <Link to="/vans">Vans</Link></li>
                    <li> <Link to="/jordan">jordan</Link></li>
                </ul>
            </div>
        </div>
    {/* </div> */}
    <div className='photo'> <Photo/> </div>
    <div className='foot'> <Footer/> </div> 
</div>
    )
}
export default Main;