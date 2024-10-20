import style from './Sidebar.module.css'
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5"
import { BiMoviePlay } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";


const Sidebar = () => {
  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarLogo}>
          <img src="/logo.png" alt="" />
      </div>
      <div className={style.sidebarMenu}>
        <Link href="" className={style.icons}>
          <GoHome className={style.icon}/>
          <p> Home</p>
        </Link>
        <Link href="" className={style.icons}>
          <IoSearch className={style.icon}  />
          <p>Search</p>
        </Link>
        <Link href="" className={style.icons}>
          <FaRegCompass className={style.icon}  />
          <p>Explore</p>
        </Link>
        <Link href="" className={style.icons}>
          <BiMoviePlay  className={style.icon} />
          <p>Reels</p>
        </Link>
        <Link href="" className={style.icons}>
          <RiMessengerLine className={style.icon}  />
          <p>Messages</p>
        </Link>
        <Link href="" className={style.icons}>
          <FiHeart  className={style.icon} />
          <p>Notifications</p>
        </Link>
        <Link href="" className={style.icons}>
          <MdOutlineAddBox className={style.icon} />
          <p>Create</p>
        </Link>
        <Link href="" className={style.icons}>
          <div className={style.profile}>
            <img src='/profile.jpg' alt="" />
          </div>
          <p>Profile</p>
        </Link>
      </div>

      <div className={style.sidebarSetting}>

        <Link className={style.icons}>
          <IoMdMenu className={style.more} />
          <p>More</p>
        </Link>

      </div>

    </div>
  )
}

export default Sidebar;