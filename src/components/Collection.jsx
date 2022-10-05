import '../static/Collection.css'
import NavBar from "./NavBar";
import CollectionList from "./CollectionList";

const Collection = () => {
  return (
    <>
      <NavBar/>
      <h1 className="section-title">Autograph Collection</h1>
      <CollectionList/>
    </>
  )
}
export default Collection