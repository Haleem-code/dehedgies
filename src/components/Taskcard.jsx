import React from "react";
import "./Styles/TaskCard.css";
import "./Tasks";
function Card() {
  const CardTitleName = "DeHedgiesNFT";
  const TaskAmount = "50";
  const TaskAmountDescription = "Like,Retweet and Comment";
  const SolAmount = "0.05";
  return (
    <div className="card-body-container">
      <a href="#" className="card-task-link">
        <div className="card">
          <div className="card-title">
            <span>
              <img src="images/twitter.svg" alt="x-icon" className="x-icon" />
            </span>
            <h4>{CardTitleName}</h4>
          </div>
          <div className="task-amount">
            <h3>{TaskAmount}</h3>
            <p>{TaskAmountDescription}</p>
          </div>
          <div className="reward-col">
            <div className="reward">
              <div className="reward-info">
                Reward{" "}
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="info-icon"
                  >
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="reward-amount">
              <img src="images/sol.svg" alt="sol-icon" className="sol-icon" />
              <span className="sol-amount">{SolAmount}</span>
            </div>
          </div>
          <div className="timer"></div>
        </div>
      </a>
    </div>
  );
}
export default Card;

// \

// <div className="card-container">
// </div>

// <div className="card-head">
//             <img
//               src="images/twitter.svg"
//               alt="twitter-icon"
//               className="x-icon"
//             />
//             <h2>DeHedgiesNFT</h2>
//           </div>

// <div className="task-number">
//             <h3>50</h3>
//             <p>Like, Retweet and Comment</p>
//           </div>

// <div className="reward">
//             <p>
//               Reward{" "}
//               <p>
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   stroke-width="0"
//                   viewBox="0 0 24 24"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="info-icon"
//                 >
//                   <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
//                 </svg>
//               </p>
//             </p>
//             </div>

// <div className="sol-reward">
//               <img src="images/sol.svg" alt="sol" className="sol-icon" />
//               <span className="sol-amount">0.05</span>
//             </div>

//           <div className="timer"></div>
