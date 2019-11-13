import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
const buttonClick = e => {
  e.preventDefault();
  document.querySelector(".collapse").classList.contains("show")
    ? document.querySelector(".collapse").classList.remove("show")
    : document.querySelector(".collapse").classList.add("show");
};

const isActive = () => {
  document.querySelectorAll(".nav-item").forEach(el => {
    if (window.location.pathname == el.href) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};
const Nav = ({en,author}) => (
  <span>
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
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
        aria-label="Toggle navigation"
      >
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
            <a className="nav-link" href="/github">
              Moi-Git
            </a>
          </li>
          <li onClick={isActive} className="nav-item">
            <a className="nav-link" href="/live">
              Live
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          {"<"}{en}{">"}
        </span>
      </div>
    </nav>
  </span>
);
Nav.getInitialProps = async ({ req }) => {
  const res = await fetch(
    "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en"
  );
  const json = await res.json();
  console.log(json);
  return { en: json.en, author: json.author };
};

export default Nav;
