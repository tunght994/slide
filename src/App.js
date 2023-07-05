import { useEffect, useRef, useState } from "react";
import "./App.css";

import Slide from "./ViewPager";
import { useDispatch, useSelector } from "react-redux";
import { fetchMediaItems } from "./redux/slider/action";
import useConnectWsCamera from "./hook/useConnectWsCamera";

import face_loading from "./images/Lottie/face_loading.json";
import Lottie from "lottie-react";
import Home from "./component/home";
import IconExit from "./images/icon/exit";
import { listItem } from "./data/dataListItem";
import InfoBill from "./component/infoBill";
import { detailInfoBill } from "./data/detailInfoBill";



function App() {
  const lottieRef = useRef();

  const { cameraStreamUrl, count, errDevice, message } = useConnectWsCamera();

  const dispatch = useDispatch();
  const listMedia = useSelector((state) => state.mediaItemsSlice.listMedia);

  useEffect(() => {
    dispatch(fetchMediaItems());
  }, []);

  return (
    <>
      {/* <Home
        nameOffice="PGD Thành Công"
        timeTransaction="09:48, 21 September 2019"
        title='Xin chào quý khách'
        desp='Mời quý khách lựa chọn giao dịch'
        listItem={listItem}
        valueBtn="Thoát"
        iconBtn={<IconExit />}
      /> */}
      <InfoBill
        nameOffice="PGD Thành Công"
        timeTransaction="09:48, 21 September 2019"
        detailInfoBill={detailInfoBill}
      />
      {/* {!cameraStreamUrl ? (
        <Slide mediaItemsT={listMedia} />
      ) : (
        <div className="face-screen">
          <div className="block-face">
            <div id="liveView" className="block-avatar">
              {cameraStreamUrl && (
                <img
                  src={test}
                  alt="autobank"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    position: "relative",
                    zIndex: "21",
                  }}
                />
              )}
              <Lottie
                animationData={face_loading}
                loop={true}
                lottieRef={lottieRef}
                className="lottie"
              />
              {count && <div className="count">{count}</div>}
            </div>
          </div>
          <div className="block-text">
            {message || "Di chuyển khuôn mặt vào giữa vùng nhận diện"}
          </div>
        </div>
      )}
       */}
    </>
  );
}

export default App;
