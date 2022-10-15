import NavBar from "./NavBar"
import '../static/Works.css'
import WorksList from "./WorksList"
import tadable from '../static/img/TadableThumbnail.jpg'
import baccarat from '../static/img/baccarat.jpeg'
import ifailed from '../static/img/ifailed.png'
import agusyllabus from '../static/img/agusyllabus.png'
import senryu from '../static/img/senryu.png'
import rinri from '../static/img/RinriHatanThumbnail.png'
import one from '../static/img/ONE.jpg'
import classroom from '../static/img/17classroom.png'
import ending from '../static/img/ending.png'
import jetlag from '../static/img/jetlag.png'
import virtualcampus from '../static/img/virtualcampus.png'
import githubmicro from '../static/img/githubmicro.png'
import cynical from '../static/img/cynicalnight.png'
import empty from '../static/img/empty.png'



const Works = () => {
  return (
    <>
      <NavBar/>
      <h1 className="section-title">Works</h1>
      <div className="List-Wrapper">
        <WorksList img={empty} name={'アオガク空き教室'} text={'Service you can find vacant classroom'}
          src={'https://aogakuempty.deta.dev/'} />
        <WorksList img={tadable} name={'Tadable'} text={'Service to find where to read free comics'}
          src={'https://tadable.herokuapp.com/'} />
        <WorksList img={baccarat} name={'Baccarat Ranking'} text={'Ranking system for school festival'}
          src={'https://casinorank.herokuapp.com/'} />
        <WorksList img={ifailed} name={'落単報告メーカー'} text={'Image creating service for Twitter when you failed class'} src={'https://ifailed-a08cd.web.app/'} />
        <WorksList img={agusyllabus} name={'AGU SyllabusSearcher Remix'} text={"Recreated university's syllabus searching system"} src={'https://agusyllabus.deta.dev/'}/>
        <WorksList img={senryu} name={'アニメ風川柳・俳句メーカー'} text={"Image creating service you can create traditional literary creation look like japanese anime title"} src={'https://manga-80f94.web.app/'} />
        <WorksList img={rinri} name={'ショートドラマ『倫理破綻』'} text={"Story about four terrible university students"}
          src={'https://youtu.be/ZWRIBzV1HWU'} />
        <WorksList img={one} name={'メイキング映像『Creating One』'} text={"Behind the scenes of Music Video 'One' "}
          src={'https://www.youtube.com/watch?v=bnoYtpCUaJM'} />
        <WorksList img={classroom} name={'17classroom'} text={"Created 3d model of classroom in University"}
          src={'https://drive.google.com/file/d/1zZoTDEG15kgN3k5PxtTKXncS0-Q02FGw/view?usp=sharing'} />
        <WorksList img={ending} name={'Endingroll of 2021 recital'} text={"Ending roll"}
          src={'https://youtu.be/28pXHlWrUf8'} />
        <WorksList img={jetlag} name={'Shortfilm Jetlag'} text={"Created short film"}
          src={'https://www.youtube.com/shorts/D3bbqFgci5c'} />
        <WorksList img={virtualcampus} name={'Virtual Aoyama Campus(β)'} text={"virtual world in Cluster"}
          src={'https://cluster.mu/w/94c22c26-62cf-4f30-b03a-a66fba76976f'} />
        <WorksList img={githubmicro} name={'GitHub MicroBattle'} text={"Create unity game which effects github"}
          src={'https://youtu.be/o1ozdXumqhc'} />
        <WorksList img={cynical} name={'CynicalNightPlan MusicVideo'} text={"Music Video created with motiongraphics"}
          src={'https://www.youtube.com/watch?v=iDUABJZ4oXQ'} />

      </div>
    </>
  )
}
export default Works