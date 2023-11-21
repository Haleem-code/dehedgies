import React from "react";
import "./Styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <section className="intro">
        <div className="acc-connect">
          <h2 className="account">ACCOUNT</h2>
          <button className="connect-wallet">Connect Wallet</button>
        </div>
        <div>
          <h3 className="overview">Overview</h3>
        </div>
      </section>
      <div className="twitter--box">
        <img src="images/Avatar.svg" alt="profile-image" className="x-avatar" />
        <span>
          <p className="x-username">@username</p>
        </span>
        <img
          src="images/twitter.svg"
          alt="tweeter icon"
          className="tweet-icon"
        />
      </div>

      <section className="status">
        <h2 className="status-head">Status</h2>
        <div className="status-card">
          <div className="status-col-1">
            <img src="images/sol.svg" alt=" sol-icon" className="sol-img" />
            <p className="earning">Total Earnings</p>
            <p className="amount">
              $1.5<span>SOL</span>
            </p>
          </div>
          <div className="status-col-2">
            <img
              src="images/leaderboard.svg"
              alt=" leaderboard"
              className="lb-img"
            />
            <p className="earning">Leaderboard</p>
            <p className="rank">
              #<span>214</span>
            </p>
          </div>
        </div>
      </section>

      <section className="wallet">
        <h2 className="wallet--head">Wallet</h2>
        <div className="wallet--box">
          <p className="wallet-address">0x000000000000000000000000</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
