
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const MESSAGE = "MESSAGE";
const DATA = "DATA";
const STATUS = "STATUS";
const START = "START";
const STOP = "STOP";

const useConnectScannerFinger = () => {
    const dispatch = useDispatch();
    const wsRef = useRef(null);
    const timerReconnect = useRef(0);
    const isUnmounted = useRef(false);
    const [wsConnected, setWsConnected] = useState(false);
    const [message, setMessage] = useState("");

    const startScanner = () => {
        wsRef.current.send(START);
    };

    const stopScanner = () => {
        wsRef.current.send(STOP);
    };

    const connectWs = useCallback(() => {
        setWsConnected(false);
        wsRef.current = new WebSocket("ws://172.16.15.106:8881");
        wsRef.current.onopen = () => {
            console.log("connected");
            setWsConnected(true);
            clearTimeout(timerReconnect.current);
            // startScanner()
        };
        wsRef.current.onmessage = async (e) => {
            // console.log("message", e)
            try {
                const evtData = JSON.parse(e.data);
                const { type } = evtData;
                switch (type) {
                    case MESSAGE: {
                        const { code } = evtData;
                        let message = ""
                        if (code == 11) {
                            message = "Không có vân tay";
                        } else if (code == 10) {
                            message = "Đã có vân tay";
                        }
                        setMessage(message)
                        break;
                    }
                    case STATUS: {
                        const { code } = evtData;
                        if (code == 20){
                            setMessage("Kết nối thiết bị thành công")
                        } else if (code == 22){
                            setMessage("Kết nối thiết bị thất bại")
                        } else if (code == 15){
                            setMessage("Đang capture vân tay")
                        } else if (code == 16){
                            setMessage("Hoàn thành capture vân tay")
                        } else if (code == 21){
                            setMessage("Ngắt kết nối thiết bị thành công")
                        }
                        break;
                    }
                    case DATA: {
                        setMessage("Hoàn thành capture vân tay")
                        const { imageFp } = evtData
                        if (imageFp){
                            // dispatch(setFingers(imageFp))
                        }
                    }
                }
            } catch (err) {
                console.log("cannot parse data", e.data, err);
            }
        };
        wsRef.current.onclose = (e) => {
            // console.log("close", e)
            setWsConnected(false);
            if (isUnmounted.current) return;
            timerReconnect.current = setTimeout(connectWs, 1000);
        };
        wsRef.current.onerror = (e) => {
            console.log("error", e);
        };
    }, []);

    useEffect(() => {
        connectWs();
    }, []);

    useEffect(() => {
        return () => {
            isUnmounted.current = true;
            clearTimeout(timerReconnect.current);
            wsRef.current && wsConnected && stopScanner();
            // wsRef.current && wsRef.current.close();
            setWsConnected(false);
        };
    }, []);

    return {
        wsRef,
        connectWs,
        startScanner,
        wsConnected,
        message,
        stopScanner
    };
};
export default useConnectScannerFinger;
