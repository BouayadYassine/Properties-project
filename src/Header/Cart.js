import React, { useEffect, useRef, useState } from "react";
import classes from "./Cart.module.css";
import Header from "./Header";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import { deletePropertie } from "../redux/PropertieSlice";

const Cart = () => {
  const propertieList = useSelector((state) => state.Properties.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <Header />

      <div className={classes.container}>
        {propertieList.map((e) => {
          return (
            <div className={classes.PropertyItem} key={e.id}>
              <img src={e.Image} alt='' />
              <div className={classes.PropertyContent}>
                <span className={classes.price}>{e.price}</span>
                <div>
                  <p className={classes.adress}>{e.adress}</p>
                  <span className={classes.city}>{e.city}</span>
                </div>

                <button
                  className={classes.detailsBtn}
                  onClick={() => {
                    dispatch(deletePropertie({ id: e.id }));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
