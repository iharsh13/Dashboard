import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Artemis</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <hr />
      <div className="sidebar__menu">
        <h6>MAIN</h6>
        <div className="sidebar__link">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <a href="#">Dashboard</a>
          <i class="fa fa-sort-desc dropdown" aria-hidden="true"></i>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-globe" aria-hidden="true"></i>

          <a href="#">Discover</a>
          <i class="fa fa-sort-desc dropdown" aria-hidden="true"></i>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>

          <a href="#">Users</a>
          <i class="fa fa-sort-desc dropdown" aria-hidden="true"></i>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-book" aria-hidden="true"></i>

          <a href="#">Documents</a>
          <i class="fa fa-sort-desc dropdown" aria-hidden="true"></i>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-th-large" aria-hidden="true"></i>

          <a href="#">Applications</a>
          <i class="fa fa-sort-desc dropdown" aria-hidden="true"></i>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-file-o" aria-hidden="true"></i>

          <a href="#">Pages</a>
          <i class="fa fa-sort-desc dropdown" aria-hidden="true"></i>
        </div>
        <br />
        <h5>SECONDARY</h5>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Support Center</a>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-inbox" aria-hidden="true"></i>

          <a href="#">Inbox</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">File Manager</a>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-list" aria-hidden="true"></i>

          <a href="#">Data List</a>
        </div>
        <br />
        <div className="sidebar__link">
          <i class="fa fa-cog" aria-hidden="true"></i>

          <a href="#">Settings</a>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-sign-out" aria-hidden="true"></i>

          <a href="#">Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
