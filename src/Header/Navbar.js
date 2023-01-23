import React, { useEffect, useRef, useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Cart from "./Cart";

const navbar = () => {
  return (
    <nav className={classes.sitenav}>
      <div className={classes.container}>
        <div className={classes.menubgwrap}>
          <div className={classes.sitenavigation}>
            <a href='index.html' className={classes.logo}>
              Property
            </a>
            <ul className={classes.sitemenu}>
              <li className='active'>
                <Link to='/'>Home</Link>
              </li>
              <li className={classes.haschildren}>
                <a href='properties.html'>Properties</a>
                <ul className={classes.dropdown}>
                  <li>
                    <a href='#'>Buy Property</a>
                  </li>
                  <li>
                    <a href='#'>Sell Property</a>
                  </li>
                  <li className={classes.haschildren}>
                    <a href='#'>Dropdown</a>
                    <ul className=''>
                      <li>
                        <a href='#'>Sub Menu One</a>
                      </li>
                      <li>
                        <a href='#'>Sub Menu Two</a>
                      </li>
                      <li>
                        <a href='#'>Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href='services.html'>Services</a>
              </li>
              <li>
                <a href='about.html'>About</a>
              </li>
              <li>
                <a href='contact.html'>Contact Us</a>
              </li>
              <li className={classes.cart}>
                <Link to='Cart'>
                  Cart
                  <FaCartPlus />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
