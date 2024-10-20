const Highlite = ({Highlite}) => {
  return (
    <div className="highliteContainer">
        <div className='highliteImage'>
           <img src={Highlite.img} alt="" />
      </div>
      <p>{Highlite.name}</p>
    </div>
  )
}

export default Highlite