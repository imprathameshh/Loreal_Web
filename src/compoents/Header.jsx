import React from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri';
// import { VscThreeBars } from 'react-icons/vsc';
import loreal from '../assets/loreal.png'


 const Header = () => {

  // const [showMenu, setShowMenu] = useState(true)


  return (
    <div className="container">
      <div className="logo">
        <img src={loreal}  alt="" />
        {/* <span className="amazon"> L’Oreal</span> */}
      </div>

    {/* <div className="right">
      <div className="bars">
        <VscThreeBars/>
      </div>
    </div> */}

      <div className="right">
        <div >
          <ul className='list_header'>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>
        </div>
        <input type="text" placeholder='Search'/>
        <RiShoppingBag3Line/> 
      </div>
    </div>
  )
}
export default Header;
