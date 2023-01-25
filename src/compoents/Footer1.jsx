import React from 'react'
import { SiInstagram } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import { SiFacebook } from 'react-icons/si';
import { FiYoutube} from 'react-icons/fi';



const Footer1 = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h3>Company</h3>
            <ul className='ultag'>
              <li><a href="https://en.wikipedia.org/wiki/L%27Or%C3%A9al">about us</a></li>
              <li><a href="https://www.lorealparisusa.com/contact-us">our serivices</a></li>
              <li><a href="https://www.lorealparisusa.com/contact-us">privecy policy</a></li>
              <li><a href="https://www.affiliateprograms.com/p/loreal/">affiliate program</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Get Help</h3>
            <ul className='ultag'>
              <li><a href="https://www.lorealparis.ca/en-ca/faq">FAQ</a></li>
              <li><a href="https://www.lorealparisusa.com/services/shipping-and-returns.aspx">shipping</a></li>
              <li><a href="https://ycharts.com/companies/LRLCY/return_on_equity">returns</a></li>
              <li><a href="https://shop.lorealorders.com.au/">order status</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Brands</h3>
            <ul className='ultag'>
              <li><a href="https://www.lorealparisusa.com/">L'Oreal Paries</a></li>
              <li><a href="https://www.loreal.com/en/consumer-products-division/garnier/">Garniler</a></li>
              <li><a href="https://www.loreal.com/en/consumer-products-division/maybelline-new-york/">Maybelline NYC</a></li>
              <li><a href="https://www.loreal-finance.com/eng/news-release/loreal-acquires-korean-stylenanda">Stylenanda</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icon">
              <a href="https://www.instagram.com/lorealparis/"> <SiInstagram /></a>
              <a href="https://twitter.com/search?q=l%27oreal+twitter">< BsTwitter /></a>
              <a href="https://www.facebook.com/LOrealParisUSA/"><SiFacebook /></a>
              <a href="https://www.youtube.com/channel/UCzvu1mAocfeZvPnfAFgxmow"><FiYoutube /></a>
              
             
            </div>
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

export default Footer1
