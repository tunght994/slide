import React from "react";
import OverlayFullScreen from "../OverlayFullScreen";
import { WrapPopupEror } from "./index.styled";
import IcCheck from "../../images/icon/IcCheck";

const PopupEror = ({ titleEror, desc, iconBtn, textBtn, hidePopup }) => {
  const handleSubmit = () => {
    hidePopup();
  };

  return (
    <OverlayFullScreen>
      <WrapPopupEror>
        <div className="title">{titleEror}</div>
        <div className="desc">{desc}</div>
        <div className="btn-container" onClick={handleSubmit}>
          {iconBtn}
          {textBtn}
        </div>
      </WrapPopupEror>
    </OverlayFullScreen>
  );
};

export default PopupEror;
