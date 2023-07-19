import React, { useState } from "react";
import { Wrap, WrapFingerScan } from "./index.styled";
import Header from "../header";
import VerifieldFinger from "../../images/img/verifield_finger.png";
import BannerBottomFinger from "../../images/img/banner_bottom_finger.png";
import IconArrow from "../../images/icon/arrow";
import IcFingerDefault from "../../images/icon/IcFingerDefault";
import SuccessAnimation from "./SuccessAnimation";
import IcCheckScanFingerSuccess from "./IcCheckScanFingerSuccess";
import animationGetFinger from "../../images/json/finger_captured.json";
import useConnectScannerFinger from "../../hook/useConnectScannerFinger";
import { useSelector } from "react-redux";
import { NEWACCOUNT } from "../../data/dataListItem";
import { motion } from 'framer-motion';

const FingerScan = ({ nameOffice, timeTransaction }) => {

  const {
    wsRef,
    connectWs,
    wsConnected,
    message,
  } = useConnectScannerFinger()

  const [isCheckFinger, setisCheckFinger] = useState(false);
  const key = useSelector((state) => state.mediaItemsSlice.key);

  return (
    <Wrap>
      <motion.div
        initial={{ width: 0}}
        animate={{ width: "100%"}}
        exit={{ width: window.innerWidth, transition: { duration: 0.1}}}
      >

      <Header nameOffice={nameOffice} timeTransaction={timeTransaction} />
      <WrapFingerScan>
        <div className="content">
          <div className="content-header">
            <img src={VerifieldFinger} alt="VerifieldFinger" />
          </div>
          <div className="content-finger">
            {!message ? (
              <div className="content-finger-default">
                <span className="content-finger-default-value">
                  Vui lòng đưa ngón tay bất kỳ vào vùng nhận diện{" "}
                </span>
                <IconArrow />
              </div>
            ) : (
              <div className="content-finger-check">
                {isCheckFinger ? (
                    <div className="content-finger-check-success">
                        <div className="image-success">
                          <SuccessAnimation
                            successAnimation={animationGetFinger}
                            className="animation"
                          />
                          <div className="icon">
                            <IcCheckScanFingerSuccess />
                          </div>
                        </div>
                        <span className="content-finger-check-default-value">Xác nhận vân tay</span>
                    </div>
                ) : (
                    <div className="content-finger-check-default">
                        <div className="image">
                          <IcFingerDefault />
                        </div>
                        <span className="content-finger-check-default-value">Đang ghi nhận...</span>
                    </div>
                )}
              </div>
            )}
          </div>
          <div className="content-bottom">
            <img src={BannerBottomFinger} alt="BannerBottomFinger" />
          </div>
        </div>
      </WrapFingerScan>
      </motion.div>
    </Wrap>
  );
};

export default FingerScan;
