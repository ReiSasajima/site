import '../static/Collection.css'
import NavBar from "./NavBar";
import CollectionList from "./CollectionList";
// import AnimatedPage from './AnimatedPage';
import DanielCraig from '../static/img/danielcraig.jpeg'
import MarkRuffalo from '../static/img/markruffalo.jpeg'
import ChristianAlzmann from '../static/img/ChristianAlzmann.jpeg'
import BountyHunters from '../static/img/bountyhunters.jpeg'
import PhilTippett from '../static/img/philtippett.jpeg'
import PaulKasey from '../static/img/paulkasey.jpeg'

const Collection = () => {
  return (
    <>
      <NavBar />
      <h1 className="section-title">Autograph Collection</h1>
      <div className='List-Wrapper'>
        <CollectionList img={DanielCraig} name={'Daniel Craig'} text={ 'James Bond / 007 Series'} />
        <CollectionList img={MarkRuffalo} name={'Mark Ruffalo'} text={'Dr.Bruce Banner Hulk / Avengers Series'}/>
        <CollectionList img={ChristianAlzmann} name={'ChristianAlzmann'} text={'Concept Designer/ StarWars Series'} />
        <CollectionList img={BountyHunters} name={'BountyHunters'} text={"Bill Hargreaves・Jeremy Bulloch・Allan Harris・Chris Parsons・Cathy Monro"} />
        <CollectionList img={PhilTippett} name={'PhilTippett'} text={'VFX・StopMotion artist/ StarWars Series'} />
        <CollectionList img={PaulKasey} name={'PaulKasey'} text={'Admiral Raddus / StarWars Rogue One'} />
      </div>
    </>
  )
}
export default Collection