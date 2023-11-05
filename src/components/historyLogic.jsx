import React from "react";
import "./RewardsHistory";
function HistoryLogic() {
  const historyUsername = "@haleem";
  const historyRewards = "0.05";
  const historyDate = "22-04-2023";
  return (
    <div className="Rewards-body">
      <div className="table-head">
        <h2>Username</h2>
        <h2>Reward</h2>
        <h2>Date</h2>
      </div>
      <div className="reward-records">
        <div className="history-username">
          <span>
            <img src="images/Avatar.svg" alt="x-image" className="x-image" />
          </span>
          {historyUsername}
        </div>
        <div className="history-rewards">
          <span>
            <img src="images/sol.svg" alt="sol-icon" className="sol-image" />
          </span>
          {historyRewards}
        </div>
        <div className="history-date">{historyDate}</div>
      </div>
    </div>
  );
}
export default HistoryLogic;
