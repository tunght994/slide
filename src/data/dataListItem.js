import IconExit from "../images/icon/exit";
import IconNewAccount from "../images/icon/newAccount";
import test from "../images/video/bg-StandbyScreen.png";
import vide1 from "../images/video/cccd.mp4";
import vide from "../images/video/van_tay.mp4";

export const LEFT = "LEFT"
export const RIGHT = "RIGHT"

export const NEWACCOUNT = "NEWACCOUNT"
export const NEWNUMBER = "NEWNUMBER"

const listItem = [
  {
    value: "Mở tài khoản",
    icon: <IconNewAccount />,
    key: NEWACCOUNT,
    position: LEFT
  },
  {
    value: "Sao kê - số phụ",
    icon: <IconNewAccount />,
    key: NEWNUMBER,
    position: RIGHT
  },
  {
    value: "Tư vấn dịch vụ",
    icon: <IconNewAccount />,
    position: LEFT
  },
  {
    value: "Dịch vụ thẻ",
    icon: <IconNewAccount />,
    position: RIGHT
  },
  {
    value: "Giao dịch hạn mức trên 300 triệu",
    icon: <IconNewAccount />,
    position: LEFT
  },
  {
    value: "Tiền gửi",
    icon: <IconNewAccount />,
    position: RIGHT
  },
  {
    value: "Tín dụng",
    icon: <IconNewAccount />,
    position: LEFT
  },
  {
    value: "Khách hàng ưu tiên",
    icon: <IconNewAccount />,
    position: RIGHT

  },
];

const mediaItemsT = {
    time: 10000,
    mediaItems: [
      { type: "video", src: vide1 },
      { type: "video", src: vide },
      { type: "image", src: test },
    ],
  };

export { listItem, mediaItemsT };
