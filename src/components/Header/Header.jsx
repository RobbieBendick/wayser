import React from "react";
import "./Header.css"

function Header() {
  return (
    <div>
    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow header">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 icon" href="#map"><i class="fas fa-home fa-2x"></i></a>
          <ul className="navbar-nav px-3">
          <li>
          <a className="social-media-icon" href="https://www.last.fm/user/ifffy_">
                <i className="fab fa-lastfm fa-2x"></i>
            </a>
          </li>

          </ul>
    </nav>
    </div>

  );
}

export default Header;