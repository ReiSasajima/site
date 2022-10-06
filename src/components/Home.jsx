import NavBar from './NavBar';
import About from './About'
import AnimatedPage from './AnimatedPage';

const Home = () => {
  return (
    <>
      <NavBar />
      <AnimatedPage>
        <h1 className='section-title'>About</h1>
        <About />
      </AnimatedPage>
    </>
  )
}
export default Home