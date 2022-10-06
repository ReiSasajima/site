import NavBar from "./NavBar"
import '../static/Works.css'
import WorksList from "./WorksList"
import AnimatedPage from "./AnimatedPage"

const Works = () => {
  return (
    <>
      <NavBar/>
      <h1 className="section-title">Works</h1>
      <WorksList/>
    </>
  )
}
export default Works