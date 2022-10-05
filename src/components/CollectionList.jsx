import '../static/List.css'
import DanielCraig from '../static/img/danielcraig.jpeg'
import MarkRuffalo from '../static/img/markruffalo.jpeg'

const CollectionList = () => {
  return (
    <div className='List-Wrapper'>
      <div className="List">
        <img src={DanielCraig} alt="作品の画像" />
        <h3 className='List-Title'>Daniel Craig</h3>
        <p className='List-Description'>James Bond/007 series</p>
      </div>
      <div className="List">
        <img src={MarkRuffalo} alt="作品の画像" />
        <h3 className='List-Title'>Mark Ruffalo</h3>
        <p className='List-Description'>Dr.Banner/ Avengers series</p>
      </div>
      <div className="List">
        <img src={DanielCraig} alt="作品の画像" />
        <h3 className='List-Title'>Daniel Craig</h3>
        <p className='List-Description'>DescriptionAboutWork</p>
      </div>
    </div>
      )
}

export default CollectionList