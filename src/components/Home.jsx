import NavBar from './NavBar';
import About from './About'
import AnimatedPage from './AnimatedPage';

const Home = () => {
  return (
    <>
      <NavBar />
      <h1 className='section-title'>About</h1>
      <About />
    </>
  )
}
export default Home