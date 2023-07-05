import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const STREAM = "STREAM";
const COUNT = "COUNT";
const MESSAGE = "MESSAGE";
const DATA = "DATA";
const ERROR = "ERROR";
const CAMERA_START = "CAMERA_START"; //start camera
const CAMERA_STOP = "CAMERA_STOP"; //stop camera

const useConnectWsCamera = () => {
  const dispatch = useDispatch();
  const wsRef = useRef();
  const timerReconnect = useRef(0);
  const isUnmounted = useRef(false);
  const [wsConnected, setWsConnected] = useState(false);
  const [cameraStreamUrl, setCameraStreamUrl] = useState("");
  const [count, setCount] = useState(null);
  const [message, setMessage] = useState("");
  const [errDevice, setErrDevice] = useState("");

  const startCamera = () => {
    wsRef.current.send(CAMERA_START);
  };

  const stopCamera = () => {
    wsRef.current.send(CAMERA_STOP);
  };

  const connectWs = useCallback(() => {
    setWsConnected(false);
    wsRef.current = new WebSocket("ws://172.16.15.102:6868");
    wsRef.current.onopen = () => {
      console.log("connect");
      setWsConnected(true);
      clearTimeout(timerReconnect.current);
      startCamera();
    };
    wsRef.current.onmessage = (e) => {
      try {
                const evtData = JSON.parse(e.data);
                const { type } = evtData;
                switch (type) {
                    case STREAM: {
                        setCameraStreamUrl(`data:image/png;base64,${evtData?.frame}`);
                        break;
                    }
                    case COUNT: {
                        setCount(evtData?.count);
                        break;
                    }
                    case MESSAGE: {
                        const { code } = evtData;
                        let message = ""
                        if (code === 20) {
                            message = "Đang xử lý, vui lòng giữ yên khuôn mặt.";
                        } else if (code === 21) {
                            message = "Góc mặt không hợp lệ, vui lòng nhìn thẳng vào camera.";
                        } else if (code === 22) {
                            message =
                                "Khuôn mặt không đủ chi tiết vui lòng di chuyển khuôn mặt vào vùng nhận diện.";
                        } else if (code === 23) {
                            message = "Khuôn mặt không hợp lệ.";
                        } else if (code === 24) {
                            message = "Khuôn mặt quá nhỏ, vui lòng đưa khuôn mặt gần hơn.";
                        } else if (code === 25) {
                            message = "Vui lòng giữ yên khuôn mặt trong vùng nhận diện.";
                        } else {
                            message = "Lấy khuôn mặt thành công.";
                        }
                        setMessage(message)
                        break;
                    }
                    case ERROR: {
                        const { code } = evtData;
                        if (code === 11){
                            setErrDevice("Không thấy camera kết nối")
                        } else if (code === 12){
                            setErrDevice("kết nối camera thất bại")
                        }
                        break;
                    }
                    case DATA: {
                        stopCamera()
                        setMessage("Lấy khuôn mặt thành công.")
                        const {face} = evtData.data
                        // dispatch(setFace(face))
                    }
                }
            } catch (err) {
                console.log("cannot parse data", e.data, err);
            }
    };
    wsRef.current.close = () => {
      setWsConnected(false);
      if (isUnmounted.current) return;
      timerReconnect.current = setTimeout(connectWs, 1000);
    };
    wsRef.current.onerror = (e) => {
      console.log(e);
    };
  }, []);

  useEffect(() => {
    connectWs();
    return () => {
        isUnmounted.current = true;
        clearTimeout(timerReconnect.current);
        wsRef.current && wsConnected && stopCamera();
        wsRef.current && wsRef.current.close();
        setWsConnected(false);
      };
  }, []);

  return {
    cameraStreamUrl,
    count,
    errDevice,
    message
  }
}

export default useConnectWsCamera;
