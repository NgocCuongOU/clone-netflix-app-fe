import React, { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);

    // clean up listener
    return () => (window.onscroll = null);
  };

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          KID
          <Notifications className="icon" />
          <img
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/102405580_1343328655867215_8375037040921696325_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kc8DHvSF2tkAX9oMn56&tn=NnzZF4XOvO-SQ3Pa&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9yoGD8gHyhuEs2kzneG5yzbeCWWIt6FwoWEK2rUR5W_w&oe=6363A527"
            alt="avatar"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
