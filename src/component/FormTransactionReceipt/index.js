import React from 'react'
import { WrapFormTransactionReceipt } from './index.styled'
import LogoName from '../../images/img/logo_name.png'

const FormTransactionReceipt = ({nameOffice, timeTransaction, detailInfoBill}) => {
  return (
    <WrapFormTransactionReceipt>
        <div className='content'>
            <div className='content-header'>
                <div className='content-header-left'>
                    <img src={LogoName} alt="LogoName" />
                </div>
                <div className='content-header-right'>
                    <span className='name-office'>{nameOffice}</span>
                    <span className='time'>{timeTransaction}</span>
                </div>
            </div>
            <div className='content-number'>
                <div className="content-number-transaction">số vé giao dịch</div>
                <div className="content-number-bill">{detailInfoBill.numberBill}</div>
            </div>
            <div className='content-desp'>
                <span className="content-desp-value">DỊCH VỤ YÊU CẦU</span>
                <span className="content-desp-service">{detailInfoBill.service}</span>
            </div>
            <div className='content-bottom'>
                Xin quý khách vui lòng chờ trong ít phút.
            </div>
        </div>
    </WrapFormTransactionReceipt>
  )
}

export default FormTransactionReceipt