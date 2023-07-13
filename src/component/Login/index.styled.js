import styled from "styled-components";

const WrapPopupLinkKiosk = styled.div`
    width: 720px;
    min-height: 682px;
    background: #FFFFFF;
    border-radius: 30px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    /* gap: 30px; */
    .icon-close{
        width: 80px;
        height: 80px;
        background: #EDEDED;
        border-radius: 0 30px;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        color: #010101;
        margin-bottom: 45px;
        text-align: center;
        .title{
            color: var(--primary-100, #AE1C3F);
            text-align: center;
            font-family: SVN-Gilroy;
            font-size: 52px;
            font-style: normal;
            font-weight: 700;
            line-height: 125%;
        }
    }
    .input-link{
        margin-bottom: 45px;
    }
    .err{
        color: var(--status-error, #FF2028);
        text-align: center;
        font-family: SVN-Gilroy;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 125%; /* 40px */
        margin-top: 64px;
    }
    .btn-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 18px;
        background: var(--secondary-100, #007822);
        border-radius: 24px;
        font-weight: 700;
        font-size: 36px;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
        width: 360px;
        height: 108px;
        margin: 64px 0 0 0;
    }
`

export {
    WrapPopupLinkKiosk
}