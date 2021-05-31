import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <i className="fa fa-search" aria-hidden="true"></i>
        <a href="#">Type to search...</a>
      </div>
      <div className="navbar__right">
        <a href="#"></a>
        <a href="#">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-square-o" aria-hidden="true"></i>
        </a>

        <a href="#">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
        </a>
        <span className="upper"> Thomas Brown <br></br> 
         <span className="lower">Developer</span>
        
        </span>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
        <a href="#">
        <i class="fa fa-sort-desc" aria-hidden="true"></i>

        </a>

      </div>
    </nav>
  );
};

export default Navbar;
