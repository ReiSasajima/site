import NavBar from './NavBar';
import About from './About'
import Socialmedia from '../components/Socialmedia';

import { Skill } from './index'

// import AnimatedPage from './AnimatedPage';

const Home = () => {
  return (
    <>
      <NavBar />
      <h1 className='section-title'>About</h1>
      <About />
      <Skill />
      <Socialmedia/>
    </>
  )
}
export default Home