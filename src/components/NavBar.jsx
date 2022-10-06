import { Link } from "react-router-dom";
import '../static/NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className='nav-bar'>
        <Link className='ReiSasajima' to={'/'}>R315513</Link>
        <Link className="Works" to={'/Works/'}>Works</Link>
        <Link className="Collection" to={'/Collection/'}>Collection</Link>
      </div>
    </>
  )
}
export default NavBar