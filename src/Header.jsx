import React from "react";
import classNames from "classnames";

// import logo from "../assets/logo-full.png";
import logo from "../src/images/logo-full.png";

import smallLogo from "../src/images/logo.png";

const Header = () => {
  const [floating, setFloating] = React.useState(false); //hook

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames("header", { "header--float": floating })}>
      <img className="header__logo" src={logo} alt="Netflix logo" />
      <img className="header__avatar" src={smallLogo} alt="Netflix avatar" />
    </div>
  );
};

export default Header;
