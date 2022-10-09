import '../static/Socialmedia.css'
import { FaGithub } from 'react-icons/fa';

const GitHub=()=> {
  return (
    // <div className='Github-Wrapper'>
      <a className='Github' href="https://github.com/ReiSasajima" target="_blank" rel="noreferrer noopener">
        <p><FaGithub/> GitHub</p> 
      </a>
    // </div>
  )
}

export default GitHub