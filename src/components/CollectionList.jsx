import '../static/List.css'
// import { useContext } from 'react'
// import AutographsContext from '../index';

const CollectionList = (props) => {
  // const autographs = useContext(AutographsContext)

  return (
      <a className='List' href={props.src} target="_blank" rel="noreferrer noopener">
        <div>
          <img src={props.img} alt="danielcraig" />
          <h3 className='List-Title'>{ props.name}</h3>
          <p className='List-Description'>{props.text}</p>
        </div>
      </a>
      )
}

export default CollectionList