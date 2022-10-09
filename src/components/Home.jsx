import NavBar from './NavBar';
import About from './About'
import { Skill } from './index'

// import AnimatedPage from './AnimatedPage';

const Home = () => {
  return (
    <>
      <NavBar />
      <h1 className='section-title'>About</h1>
      <About />
      <Skill />
    </>
  )
}
export default Home