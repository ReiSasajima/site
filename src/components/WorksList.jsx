import '../static/List.css'
import Tadable from '../static/img/TadableThumbnail.jpg'
import ifailed from '../static/img/ifailed.png'
const WorksList = () => {
  return (
    <div className='List-Wrapper'>
      <a className='List' href="https://tadable.herokuapp.com/">
        <div>
          <img src={Tadable} alt="作品の画像" />
          <h3 className='List-Title'>Tadable</h3>
          <p className='List-Description'>Service you can find where to read free comics</p>
        </div>
      </a>
      <a className='List' href="https://ifailed-a08cd.web.app/">
        <div>
          <img src={ifailed} alt="作品の画像" />
          <h3 className='List-Title'>落単報告メーカー</h3>
          <p className='List-Description'>Image creating service for Twitter when you failed class</p>
        </div>
      </a>
      
    </div>
  )
}
export default WorksList