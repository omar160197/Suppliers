import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white  ${styles.navBar}`}
      >
        <div className="container-fluid">
          {/* Search Box in small screens */}
          <div className={`w-50 mx-auto ${styles.smSearchBox}`}>
            <div className={`${styles.searchContainer}`}>
              <input className={`ps-4 ${styles.searchInput}`} />
              <span className={`fa fa-search ${styles.searchIcon}`}></span>
            </div>
          </div>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <br />
          </button>
          <div className="collapse  navbar-collapse " id="navbarScroll">
            <div className="col-md-2 me-5"></div>
            {/* Search Box in md to xl screens */}
            <div className={`col-md-3 ${styles.lgSearchBox}`}>
              <div className={`${styles.searchContainer}`}>
                <input className={`ps-4 ${styles.searchInput}`} />
                <span className={`fa fa-search  ${styles.searchIcon}`}></span>
              </div>
            </div>

            {/* Icons Box in md to xl screens */}
            <div className="col-md-2  ms-auto">
              <div className={`${styles.iconsContainer}`}>
                <span className="fa-regular fa-comment fs-3"></span>
                <hr />
                <span>
                  <i className="fa-regular fa-user fs-3"></i>
                  <span className="ms-1">Hello Omar</span>
                </span>
                <hr />
                <span className="fa fa-power-off fs-3 "></span>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
