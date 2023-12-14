import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (<></>
    <nav className="navbar">
      <div className="container">
        <div className="logo-box">
          <span>
            {/* <img src="images/sonic.png" alt="logo-icon" className="logo-icon" /> */}
          </span>
          <h1 className="logo">DEHEDGIES</h1>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"></path>
              </svg>
            </i>
          ) : (
            <i>
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path>
                </g>
              </svg>
            </i>
          )}
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <i>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
                </svg>
              </i>
              <NavLink to="/Tasks" className="link">
                Tasks
              </NavLink>
            </li>
            <li>
              <i>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </i>
              <NavLink to="/RewardsHistory" className="link">
                RewardsHistory
              </NavLink>
            </li>
            <li>
              <i>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574-22.055 14.87-1.847 26.571-25.81 6.425-10.803 24.314-26.46-2.795-18.475 19.087L256 285.403l-23.902 11.677-18.475-19.15-26.46 2.795-10.803-24.313-25.81-6.363-1.847-26.534-22.118-14.92 7.348-25.573-15.594-21.544 15.644-21.52-7.398-25.523 22.068-14.87L150.5 73.03l25.86-6.362 10.803-24.313 26.46 2.794L232.098 26 256 37.677 279.902 26l18.475 19.149 26.46-2.794 10.803 24.313 25.81 6.425 1.847 26.534 22.055 14.87-7.347 25.574 15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242 72.355 72.355 0 0 0 72.242-72.242zm-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283 52.395 52.395 0 0 0-52.282-52.245z"></path>
                </svg>
              </i>
              <NavLink to="/Leaderboard" className="link">
                Leaderboard
              </NavLink>
            </li>
            <li>
              <i>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </i>
              <NavLink to="/Profile" className="link">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
