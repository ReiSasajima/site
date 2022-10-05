import NavBar from "./NavBar"
import '../static/Works.css'
import WorksList from "./WorksList"

const Works = () => {
  return (
    <>
      <NavBar/>
      <h1 className="section-title">WorksPage</h1>
      <WorksList/>
    </>
  )
}
export default Works