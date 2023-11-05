import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const MaybeShowNavbar = (children) => {
  const location = useLocation();

  const [showNavbar, setshowNavbar] = useState(false);
  useEffect(() => {
    console.log("this is location", location);
    if (location.pathname === "/LandingPage") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
};
export default MaybeShowNavbar;
