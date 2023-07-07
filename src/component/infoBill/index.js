import React from "react";
import { Wrap, WrapInfoBill } from "./index.styled";
import Header from "../header";
import { NORMAL, VIP } from "../../data/detailInfoBill";
import XuatVe from '../../images/img/xuat_ve.png'
import FormTransactionReceipt from "../FormTransactionReceipt";

const InfoBill = ({ nameOffice, timeTransaction, detailInfoBill }) => {
  return (
    <Wrap>
      <Header nameOffice={nameOffice} timeTransaction={timeTransaction} />
      <WrapInfoBill >
        <div className="content">
          {detailInfoBill.level === NORMAL && (
            <div className="content-header">
              <span>Xin chào quý khách</span>
              <span className="name">{detailInfoBill.name}</span>
            </div>
          )}
          <div className="content-title">Thông tin vé giao dịch</div>
          <div className="content-number">
            <div className="content-number-transaction">số vé giao dịch</div>
            <div className="content-number-bill">{detailInfoBill.numberBill}</div>
          </div>
          <div className="content-desp">
            {
              detailInfoBill.level === NORMAL ? <div className="content-desp-value">
                XIN MỜI QUÝ KHÁCH ĐẾN QUẦY VIP ĐỂ ĐƯỢC PHỤC VỤ
              </div> : <>
                <span className="content-desp-value">DỊCH VỤ YÊU CẦU</span>
                <span className="content-desp-service">{detailInfoBill.service}</span>
              </>
            }
          </div>
          <div className="content-bottom">
            <span className="content-bottom-value">Vé sẽ được in ra từ thiết bị, bạn vui lòng đợi trong giây lát...</span>
            <img src={XuatVe} alt="xuat ve"/>
          </div>
        </div>
      </WrapInfoBill>
    </Wrap>
  );
};

export default InfoBill;
