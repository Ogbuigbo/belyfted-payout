import React from "react";
import Link from "next/link";
import NairaIcon from "../../../public/assets/icons/NairaIcon";
import DropdownIcon from "../../../public/assets/icons/dropdownIcon";
import BrokenRightArrowIcon from "../../../public/assets/icons/brokenRightArrowIcon";
import RightArrowIcon from "../../../public/assets/icons/arrowRightIcon";
import MoneyYellowIcon from "../../../public/assets/icons/moneyYellowIcon";
import MoneyGreyIcon from "../../../public/assets/icons/moneyGreyIcon";

const BalanceCard = ({ balanceInfo }) => {
  return (
    <div className="dashboard-container">
      <div className="balance-card">
        <div className="balance-card-left">
          <div className="currency-selector">
            <div className="currency-icon">
              <NairaIcon />
              <span>NGN</span>
              <DropdownIcon />
            </div>
          </div>

          <div className="balance-info">
            <div className="balance-label">Available balance</div>
            <div className="balance-amount">
              <span className="currency-symbol">$</span>
              <span className="balance-whole">32,000</span>
              <span className="balance-decimal">.09</span>
            </div>
          </div>
        </div>

        <div className="balance-card-right">
          <div className="balance-details">
            <div className="balance-row">
              <span className="balance-label-text">Ledger Balance :</span>
              <span className="balance-value">$200</span>
            </div>
            <div className="balance-row">
              <span className="balance-label-text">Locked Balance :</span>
              <span className="balance-value">$189</span>
            </div>
          </div>

          <div className="balance-divider"></div>

          <div className="rolling-reserve">
            <div>
              <Link href="/dashboard/rolling-reserve" className="reserve-link">
                Rolling Reserve
              </Link>
              <span className="reserve-value"> : $400</span>
            </div>
            <BrokenRightArrowIcon />
          </div>
        </div>
      </div>

      <div className="action-cards-wrapper">
        <div className="action-card payout-card">
          <h3 className="action-title">Make Payout🚀</h3>
          <p className="action-description">
            This works like a virtual bank where you use your car....
          </p>
          <Link
            href="/dashboard/outbound/make-payout"
            className="action-button"
          >
            <span className="actionbtn-text">Send Now</span>
            <RightArrowIcon />
          </Link>
          <div className="money-icon">
            <MoneyYellowIcon />
          </div>
        </div>

        <div className="action-card account-card">
          <h3 className="action-title">Request Virtual Account 🚀</h3>
          <p className="action-description">
            This works like a virtual bank where you use your car....
          </p>
          <Link
            href="/dashboard/inbound/virtual-account"
            className="action-button"
          >
            <span className="actionbtn-text">Request Account</span>
            <RightArrowIcon />
          </Link>
          <div className="money-icon">
            <MoneyGreyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
