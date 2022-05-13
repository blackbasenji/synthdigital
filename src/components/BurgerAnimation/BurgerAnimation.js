import React, { useState, useCallback } from "react";
import { HamburgerSlider } from "react-animated-burgers";
import "./BurgerAnimation.scss";

const BurgerAnimation = ({ isActive, toggleButton }) => {
  return (
    <HamburgerSlider
      className="opening"
      buttonColor="#FFBC67"
      barColor="white"
      {...{ isActive, toggleButton }}
    />
  );
};

export default BurgerAnimation;
