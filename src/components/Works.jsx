import NavBar from "./NavBar"
import '../static/Works.css'
import WorksList from "./WorksList"
import tadable from '../static/img/TadableThumbnail.jpg'
import baccarat from '../static/img/baccarat.jpeg'
import ifailed from '../static/img/ifailed.png'
import agusyllabus from '../static/img/agusyllabus.jpeg'
import senryu from '../static/img/senryu.png'
import rinri from '../static/img/RinriHatanThumbnail.png'
import one from '../static/img/ONE.jpg'


const Works = () => {
  return (
    <>
      <NavBar/>
      <h1 className="section-title">Works</h1>
      <div className="List-Wrapper">
        <WorksList img={tadable} name={'Tadable'} text={'無料で見れる漫画'}
          src={'https://tadable.herokuapp.com/'} />
        <WorksList img={baccarat} name={'Baccarat Ranking'} text={'Ranking system for school festival'}
          src={'https://casinorank.herokuapp.com/'} />
        <WorksList img={ifailed} name={'落単報告メーカー'} text={'Image creating service for Twitter when you failed class'}
          src={'https://ifailed-a08cd.web.app/'} />
        <WorksList img={agusyllabus} name={'AGU SyllabusSearcher Remix'} text={"Recreated university's syllabus searching system"} src={'https://agusyllabus.deta.dev/'}/>
        <WorksList img={senryu} name={'アニメ風川柳・俳句メーカー'} text={"Image creating service you can create traditional literary creation look like japanese anime title"}
          src={'https://manga-80f94.web.app/'} />
        <WorksList img={rinri} name={'ショートドラマ『倫理破綻』'} text={"Story about four terrible university students"}
          src={'https://youtu.be/ZWRIBzV1HWU'} />
        <WorksList img={one} name={'メイキング映像『Creating One』'} text={"Behind the scenes of Music Video 'One' "}
          src={'https://www.youtube.com/watch?v=bnoYtpCUaJM'} />

      </div>
    </>
  )
}
export default Works