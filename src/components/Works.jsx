import NavBar from "./NavBar"
import '../static/Works.css'
import WorksList from "./WorksList"
import AnimatedPage from "./AnimatedPage"

const Works = () => {
  return (
    <>
      <NavBar />
      <AnimatedPage>
        <h1 className="section-title">WorksPage</h1>
        <WorksList/>
      </AnimatedPage>
    </>
  )
}
export default Works