import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { userLogout } from './../../actions/';
const buttonClick = e => {
  document.querySelector('.collapse').classList.contains('show')
    ? document.querySelector('.collapse').classList.remove('show')
    : document.querySelector('.collapse').classList.add('show');
};

const isActive = e => {
  document.querySelectorAll('.nav-item').forEach(el => {
    if (window.location.pathname == el.href) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};
const dashboardNav = auth => {
  if (auth)
    return (
      <span className="d-flex flex-column flex-lg-row">
        <li onClick={isActive} className="nav-item">
          <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li onClick={userLogout()} className="nav-item">
          <a className="nav-link" href="/">
            Logout
          </a>
        </li>
      </span>
    );
};
const Nav = ({ authed, userLogout }) => (
  <span>
    <style jsx>{`
      .navbar {
        z-index: 300;
      }
      .moidash-body {
        margin-left: 11.125rem;
      }
    `}</style>
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
      <Link href="/">
        <a className="navbar-brand">Moi Code</a>
      </Link>
      <button
        onClick={buttonClick}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#moiNavbar"
        aria-controls="moiNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="moiNavbar">
        <ul className="navbar-nav mr-auto">
          <li onClick={isActive} className="nav-item">
            <Link href="/">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li onClick={isActive} className="nav-item">
            <a className="nav-link" href="/guides">
              Guides
            </a>
          </li>
          <li onClick={isActive} className="nav-item">
            <a className="nav-link" href="/blog">
              Blog
            </a>
          </li>
          <li onClick={isActive} className="nav-item">
            <a className="nav-link" href="/live">
              Live
            </a>
          </li>
          {dashboardNav(authed, userLogout)}
        </ul>
        <span className="navbar-text text-capitalize">
          {'<'}Where Creation Happens{'>'}
        </span>
      </div>
    </nav>
  </span>
);
const mapStateToProps = state => ({
  authed: state.AuthReducer.authed,
});
export default connect(mapStateToProps, { userLogout })(Nav);
