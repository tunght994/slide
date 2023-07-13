import { useDispatch } from "react-redux"
import IcStart from "../../images/icon/exit/IcStart"
import { useState } from "react"
import { WrapPopupLinkKiosk } from "./index.styled"
import IcCloseGray from "../../images/icon/IcCloseGray"
import IcLogoLinkKiosk from "../../images/icon/IcLogoLinkKiosk"
import OverlayFullScreen from '../OverlayFullScreen'
import InputText from './InputText'
import IcCheck from "../../images/icon/IcCheck"


const iconInputStar = {
    icon: IcStart,
    // iconActive: IcStartActive,
    // iconError: IcStartError,
}

export default function PopupLinkKios({ linkSuccess, hidePopup }) {
    const dispatch = useDispatch()
    const [linkDeviceCode, setLinkDeviceCode] = useState("")
    const [PINCode, setPinCode] = useState("")
    const [isCallApiErr, setIsCallApiErr] = useState(false)

    const handleGetLinkDeviceCode = (value) => {

    }

    const handleGetPinCode = (value) => {
        
    }

    const callBackSuccess = () => {

    }
    const handleSubmit = () => {

    }

    return (
        <OverlayFullScreen>
            <div className='wrap-inner-screen'>
                <WrapPopupLinkKiosk>
                    <div className='icon-close' onClick={hidePopup}>
                        <IcCloseGray />
                    </div>
                    <div className='header'>
                        <IcLogoLinkKiosk />
                        <div className="title">
                          Thiết bị chưa được kết nối vào hệ thống
                        </div>
                        <div className='desc'>Bạn vui lòng nhập mã ID và mã PIN của thiết bị để cấu hình vào hệ thống</div>
                    </div>
                    <InputText
                        title={"Nhập mã ID"}
                        isRequired={false}
                        iconInput={iconInputStar}
                        value={linkDeviceCode}
                        onChange={handleGetLinkDeviceCode}
                        className="input-link"
                    />
                    <InputText
                        title={"Mã PIN thiết bị"}
                        isRequired={false}
                        iconInput={iconInputStar}
                        value={PINCode}
                        onChange={handleGetPinCode}
                    />
                    {
                        isCallApiErr && <div className='err'>Vui lòng nhập đầy đủ thông tin
                        Mã không đúng hoặc không tồn tại</div>
                    }
                    <div className='btn-container' onClick={handleSubmit}>
                      <IcCheck />
                      Cấu hình
                    </div>
                </WrapPopupLinkKiosk>
            </div>
        </OverlayFullScreen>
    )
}
