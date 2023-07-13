import React from "react";
import OverlayFullScreen from "../OverlayFullScreen";
import { WrapPopupComfirm } from "./index.styled";
import IcCheck from "../../images/icon/IcCheck";
import IcEnd from "../../images/icon/IcEnd";

const PopupConfirm = ({ title, desc, hidePopup, time , isWarning}) => {
  const handleSubmit = () => {
    hidePopup();
  };

  return (
    <OverlayFullScreen>
      <WrapPopupComfirm>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <div className="btn" onClick={handleSubmit}>
          <div className="btn-end">
            <IcEnd />
            Kết thúc
          </div>
          <div className="btn-next">
            <IcCheck />
            Tiếp tục
          </div>
        </div>
        {
          isWarning && <div className="warning">
            Phiên giao dịch sẽ kết thúc sau: {time}s
          </div>
        }
      </WrapPopupComfirm>
    </OverlayFullScreen>
  );
};

export default PopupConfirm;
