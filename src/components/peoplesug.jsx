import style from './suggestion.module.css'

const PeopleSug = () => {
  return (
    <div className={style.newToInsta}>
            <div className={style.container}>
              <div className={style.profile}></div>
              <div className={style.content}>
                <p>prabinnnnn_</p>
                <p>Suggested for you</p>
              </div>
            </div>
            <span>Follow</span>
      </div>
  )
}


export default PeopleSug;