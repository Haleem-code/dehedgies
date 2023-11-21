import React from "react";
import "./Styles/LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-body">
      <div className="welcome-col">
        <h1 className="welcome">Welcome to DeHedgies R2E</h1>
        <p>
          We will provide you with tasks on this page. By completing these tasks
          you will earn priority status and rewards. your initial task is to
          connect your Twitter.
        </p>
        <div className="btn-box">
          <button className="button">
            <img
              src="images/twitter.svg"
              alt="x-icon"
              className="landing-tweet"
            />
            Connect Twitter
          </button>
        </div>
      </div>

      <div className="landing-img">
        <div>
          <img src="images/home.svg" alt="R2E" className="home-img" />
        </div>
      </div>
    </section>
  );
}
export default LandingPage;
