import '../static/List.css'

const WorksList = (props) => {
  return (
      <a className='List' href={props.src} target="_blank" rel="noreferrer noopener">
        <div>
        <img src={props.img} alt="作品の画像" />
        <h3 className='List-Title'>{ props.name}</h3>
        <p className='List-Description'>{props.text}</p>
        </div>
      </a>
  )
}
export default WorksList