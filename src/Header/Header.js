import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Properties from "../PropertySection/Properties";
import classes from "./Header.module.css";

const images = [
  "url('./images/hero_bg_1.jpg')",
  "url('./images/hero_bg_2.jpg')",
  "url('./images/hero_bg_3.jpg')",
];

const delay = 6000;

function Header() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className={classes.Heroslide}>
        <form action='' className={classes.formsearch}>
          <h3>Easiest way to find your dream home</h3>
          <input
            type='text'
            className={classes.formcontrol}
            placeholder='Your ZIP code or City. e.g. New York'
          />
          <button type='submit'>Search</button>
        </form>

        <div
          className={classes.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((backgroundImage, index) => (
            <div
              className={[classes.Img, classes.overlay].join(" ")}
              key={index}
              style={{ backgroundImage }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
