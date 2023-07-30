import React from "react";
import Hamburger from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "app/reducers/logicReducer";
import { selectIsMenuOpen } from "app/selectors/logicSelector";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  console.log(isMenuOpen);

  const toggleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <Hamburger toggled={isMenuOpen} toggle={toggleHamburgerMenu} />
    </div>
  );
};

export default Header;
