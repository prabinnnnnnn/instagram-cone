import style from './suggestion.module.css'
import PeopleSug from './peoplesug';


const Suggestion = () => {
  const item = [
    { apple: 'aa' },
    { apple: 'aa' },
    { apple: 'aa' },
  ]
  return (
    <div className={style.suggestionContainer}>

      <div className={style.suggestion}>

        <div className={style.switch}>

          <div className={style.switch_profile}>
            <div className={style.switchImage}>
            <img src="/profile.jpg" alt="" />
            </div>
            <p>prabinnnnn_</p>
            
          </div>
          <span>Switch</span>
        </div>

        <div className={style.suggested}>
          <div className={style.suggested_name}>
            <p>Suggested for you</p>
            <span>See All</span>
          </div>
          {item.map(()=> <PeopleSug />)}
        
        </div>
      </div>
    </div>
  )
}

export default Suggestion;