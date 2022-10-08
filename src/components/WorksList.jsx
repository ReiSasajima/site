import '../static/List.css'
import Tadable from '../static/img/TadableThumbnail.jpg'
import ifailed from '../static/img/ifailed.png'
import agusyllabus from '../static/img/agusyllabus.jpeg'
import senryu from '../static/img/senryu.png'
import baccarat from '../static/img/baccarat.jpeg'
const WorksList = () => {
  return (
    <div className='List-Wrapper'>
      <a className='List' href="https://agusyllabus.deta.dev/">
        <div>
          <img src={baccarat} alt="作品の画像" />
          <h3 className='List-Title'>Baccarat Ranking</h3>
          <p className='List-Description'>Ranking system for school festival</p>
        </div>
      </a>
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
      <a className='List' href="https://agusyllabus.deta.dev/">
        <div>
          <img src={agusyllabus} alt="作品の画像" />
          <h3 className='List-Title'>AGU SyllabusSearcher Remix</h3>
          <p className='List-Description'>Recreated syllabus searching system of University</p>
        </div>
      </a>
      <a className='List' href="https://casinorank.herokuapp.com/">
        <div>
          <img src={senryu} alt="作品の画像" />
          <h3 className='List-Title'>アニメ風川柳・俳句メーカー</h3>
          <p className='List-Description'>You can create literary creation like japanese anime's title</p>
        </div>
      </a>
      
    </div>
  )
}
export default WorksList