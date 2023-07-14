import React, { useEffect, useState } from "react";
import { WrapHeader } from "./index.styled";
import logoBank from "../../images/img/logo.png";
import PopupLinkKios from "../Login";
import PopupEror from "../PopupErr";
import IcReload from "../../images/icon/IcReload";
import IcCheck from "../../images/icon/IcCheck";
import PopupConfirm from "../PopupConfirm";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

const Header = ({ timeTransaction, nameOffice }) => {

  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isErrorDevice, setIsErrorDevice] = useState(true);
  const [isNextTransaction, setIsNextTransaction] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer;

    if (isShowPopup && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
    }, [isShowPopup, countdown]); 

    const openPopup = () => {
      setIsShowPopup(true)
      setCountdown(10);
    };

    const hidePopup = () => {
      
    }

  return (
    <WrapHeader>
      <div className="header-left">
        <span className="name-office">{nameOffice}</span>
        <span className="time">{timeTransaction}</span>
      </div>
      <div className="header-right" onClick={openPopup}>
        <img src={logoBank} alt="logo" />
        <span className="name-bank">AGRIBANK</span>
      </div>
    {/* {
      isShowPopup && <PopupLinkKios hidePopup={() => setIsShowPopup(false)}/>
    } */}

      {/* {isShowPopup && (
        <PopupEror
          hidePopup={() => setIsShowPopup(false)}
          titleEror={`${isErrorDevice ? "Không kết nối được với các thiết bị ngoại vi" : "Đã có lỗi xảy ra"}`}
          desc={`${isErrorDevice ? "Vui lòng kiểm tra lại các thiết bị ghi hình, thiết bị ghi nhận vân tay" : "Mất kết nối với hệ thống"}`}
          iconBtn={isErrorDevice ? <IcCheck /> : <IcReload />}
          textBtn={`${isErrorDevice ? "Đã hiểu" : "Thử lại"}`}
        />
      )} */}

      {
        isShowPopup && <PopupConfirm
          hidePopup={hidePopup}
          title={`${isNextTransaction ? "Tiếp tục giao dịch" : "Kết thúc giao dịch"}`}
          desc={`${isNextTransaction ? "Bạn vui lòng bấm nút “Tiếp tục” để tiếp tục giao dịch" : "Bạn có chắc chắn muốn kết thúc phiên giao dịch này?"}`}
          isWarning={isNextTransaction}
          time={countdown}
        />
      }
    </WrapHeader>
  );
};

export default Header;
