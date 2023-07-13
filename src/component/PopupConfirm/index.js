import React from "react";
import OverlayFullScreen from "../OverlayFullScreen";
import { WrapPopupComfirm } from "./index.styled";
import IcCheck from "../../images/icon/IcCheck";
import IcEnd from "../../images/icon/IcEnd";

const PopupConfirm = ({ title, desc, hidePopup, time , isWarning}) => {

  const handleSubmit = () => {
    hidePopup();
  };  

  const handleEnd = () => {
    hidePopup();
  };

  return (
    <OverlayFullScreen>
      <WrapPopupComfirm>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <div className="btn" >
          <div className="btn-end" onClick={handleEnd}>
            <IcEnd />
            Kết thúc
          </div>
          <div className="btn-next" onClick={handleSubmit}>
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
