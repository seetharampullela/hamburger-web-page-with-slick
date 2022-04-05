// Write your code here
import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo-image"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button className="button" type="button" testid="hamburgerIconButton">
            <GiHamburgerMenu size={20} />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              className="close-button"
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} />
            </button>
            <ul className="list-container">
              <li>
                <Link
                  to="/"
                  className="menu-bar-container"
                  onClick={() => close()}
                >
                  <AiFillHome className="react-icon" />
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="menu-bar-container"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill />
                  <h1>About</h1>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
