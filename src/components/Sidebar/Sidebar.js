import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";
import {AiOutlineClose} from 'react-icons/ai';
import './Sidebar.css';
var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const [isOpen, setIsOpen] = React.useState(true);

  const handleActiveBarClick = () => {
      setIsOpen(!isOpen);
  }

  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    // sidebarToggle.current.classList.toggle("toggled");
  };

  return (
    <div className={isOpen ? "sidebar" : "sidebar-active"} data-color={props.backgroundColor} style={{transition:"0.7s"}}>
      <div className="logo" style={{display:"flex"}}>
          <a
            href=""
            className="simple-text logo-mini"
            target="_blank"
            
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href=""
            className="simple-text logo-normal"
            target="_blank"
          >
            ImmoAsk Business
          </a>
        <div>
        </div>
        {/* <div style={{marginTop:"6px"}}>
          <AiOutlineClose style={{color:"#FFF", fontSize:"2rem", cursor:"pointer"}} onClick={handleActiveBarClick} />
        </div> */}
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path) +
                  (prop.pro ? " active active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                  // onClick={openSidebar}
                >
                  <i className={"now-ui-icons " + prop.icon} />
                  <p style={{fontSize:"14px", fontFamily:"Fira sans"}}>{prop.name}</p>
                  {/* {console.log(prop.name)} */}
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
