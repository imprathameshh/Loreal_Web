import React from 'react'
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon
} from '@heroicons/react/outline'

function Footer() {
  return (
    <div className='cFooterWrapper'>
      <hr />
      <div className="cFooter">
        {/* <div className="logo">
          <img src="https://imgs.search.brave.com/IUR5dHJYxLjJquikXOWGU9-UDP7p7Mms84s6m01b-2E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/OFJVbG0yT0pLRXhQ/QzNlOWRPaDd3SGFI/YSZwaWQ9QXBp" alt="" />
          <span> L’Oreal</span>
        </div> */}
        <div className="block">
          <div className="details">
            <span>Contact US</span>
            <span className='pngLine'>
              < PhoneIcon className="icon" />
              <a href=" 833-856-7325"> 833-856-7325</a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Account</span>
            <span className='pngLine'>
              <LoginIcon className='icon' />Sign In
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Company</span>
            <span className='pngLine'>
              <UsersIcon className='icon' />
              <a href="https://en.wikipedia.org/wiki/L%27Or%C3%A9al">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Resources</span>
            <span className='pngLine'>
              <LinkIcon className='icon' />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className="copyRight">
        <span>Copyright ©2023 by L’Oreal, Inc</span>
        <span>All right reseved.</span>
      </div>
    </div>
  )
}

export default Footer