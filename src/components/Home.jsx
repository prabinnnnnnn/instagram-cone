import style from './Home.module.css'
import Highlite from './highlite'

const Home = () => {

  const item = [
    {
      img:"/profile.jpg",
      name:'Prabinnnnn_'
    },
    {
      img:
        "https://images.unsplash.com/photo-1684207823449-cc66bb25724c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name: 'Robin'
      
    },
    {
      img:
        "https://images.unsplash.com/photo-1713606270867-95ccb0f43b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name: 'Sudip'
    },
    {
      img:
        "https://images.unsplash.com/photo-1646206381402-6eb1cd017226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name:' Risav'
    },
    {
      img:
        "https://images.unsplash.com/photo-1717521419534-0e13ad8791f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:'Prabin'
      
    },
    {
      img:
        "https://images.unsplash.com/photo-1684207823449-cc66bb25724c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name: 'Robin'
      
    },
    {
      img:
        "https://images.unsplash.com/photo-1713606270867-95ccb0f43b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name: 'Sudip'
    },
    {
      img:
        "https://images.unsplash.com/photo-1646206381402-6eb1cd017226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name:' Risav'
    },
    {
      img:
        "https://images.unsplash.com/photo-1717521419534-0e13ad8791f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:'Prabin'
      
    },
    {
      img:
        "https://images.unsplash.com/photo-1684207823449-cc66bb25724c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name: 'Robin'
      
    },
    {
      img:
        "https://images.unsplash.com/photo-1713606270867-95ccb0f43b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name: 'Sudip'
    },
    {
      img:
        "https://images.unsplash.com/photo-1646206381402-6eb1cd017226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
      name:' Risav'
    },
  ]
  
  return (
    <div className={style.homeContainer}>
      <div className={style.highlites}>
        {item.map((e) => <Highlite Highlite={e}/>)}
      </div>
    </div>
  )
}

export default Home;