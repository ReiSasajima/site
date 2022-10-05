import '../static/List.css'
import DanielCraig from '../static/img/danielcraig.jpeg'
import MarkRuffalo from '../static/img/markruffalo.jpeg'
import BountyHunters from '../static/img/bountyhunters.jpeg'
import ChristianAlzmann from '../static/img/ChristianAlzmann.jpeg'

const CollectionList = () => {
  return (
    <div className='List-Wrapper'>
      <a className='List' href="">
        <div>
          <img src={DanielCraig} alt="作品の画像" />
          <h3 className='List-Title'>Daniel Craig</h3>
          <p className='List-Description'>James Bond/007 series</p>
        </div>
      </a>
      <a className='List' href="">
        <div>
          <img src={MarkRuffalo} alt="作品の画像" />
          <h3 className='List-Title'>Mark Ruffalo</h3>
          <p className='List-Description'>Dr.Banner, Hulk/ Avengers series</p>
        </div>
      </a>
      <a className='List' href="">
        <div>
          <img src={ChristianAlzmann} alt="作品の画像" />
          <h3 className='List-Title'>Christian Alzmann</h3>
          <p className='List-Description'>Concept Artist/StarWarsSeries</p>
        </div>
      </a>
      <a className='List' href="">
        <div>
          <img src={BountyHunters} alt="作品の画像" />
          <h3 className='List-Title'>BountyHunters</h3>
          <p className='List-Description'>starwars episode5</p>
        </div>
      </a>
    </div>
      )
}

export default CollectionList