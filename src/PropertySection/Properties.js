import React, { useState, useEffect, useRef } from "react";
import classes from "./Properties.module.css";
import { FaBed, FaBath } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addPropertie } from "../redux/PropertieSlice";
import { nanoid } from "@reduxjs/toolkit";
import data from "./data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Properties() {
  const [Data, setData] = useState(data);
  const dispatch = useDispatch();
  const propertieList = useSelector((state) => state.Properties.value);

  return (
    <div className={classes.Section}>
      <div className={classes.container}>
        <div className={classes.c1}>
          <div className={classes.Head}>
            <h2>Popular Properties</h2>
          </div>
          <div className={classes.divBtn}>
            <button className={classes.PropertiesBtn}>
              <a href=''>View all properties</a>
            </button>
          </div>
        </div>

        <div className={classes.center}>
          <Carousel responsive={responsive}>
            {data.map((e) => {
              return (
                <div
                  className={[
                    classes.PropertyItem,
                    classes.slideshowSlider,
                  ].join(" ")}
                  key={e.id}
                >
                  <img src={e.Image} alt='' />
                  <div className={classes.PropertyContent}>
                    <span className={classes.price}>{e.price}</span>
                    <div>
                      <p className={classes.adress}>{e.adress}</p>
                      <span className={classes.city}>{e.city}</span>
                      <div className={classes.flex}>
                        <span>
                          <FaBed />
                        </span>
                        <span className={classes.size}>2 beds</span>

                        <span>
                          <FaBath />
                        </span>
                        <span className={classes.size}>2 baths</span>
                      </div>
                    </div>

                    <button
                      className={classes.detailsBtn}
                      onClick={() => {
                        dispatch(
                          addPropertie({
                            id: nanoid(),
                            Image: e.Image,
                            price: e.price,
                            city: e.city,
                            adress: e.adress,
                          })
                        );
                      }}
                    >
                      <a>Buy Now</a>
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Properties;
