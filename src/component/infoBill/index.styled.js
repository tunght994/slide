import { styled } from "styled-components";
import PageBg from "../PageBg/index.styled";

const Wrap = styled(PageBg)`
`

const WrapInfoBill = styled.div`
    padding: 121px 60px;
    margin: auto;

    .content{
        background: #fff;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        /* height: calc(100% - 160px); */
        padding: 80px 120px;
        font-size: 32px;
        &-header{
            text-align: center;
            display: flex;
            flex-direction: column;
            .name{
                font-weight: 700;
                text-transform: uppercase;
            }
        }
        &-title{
            color: var(--black-100, #222);
            text-align: center;
            font-size: 52px;
            font-family: 'SVN-Gilroy';
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            margin: 48px 0;
        }
        &-number{
            text-align: center;
            &-transaction{
                color: var(--agribank-green, #00783A);
                text-align: center;
                font-size: 32px;
                font-family: 'SVN-Gilroy';
                font-style: normal;
                font-weight: 700;
                line-height: 150%;
                text-transform: uppercase;
            }
            &-bill{
                color: var(--agribank-red, #AB1F24);
                text-align: center;
                font-size: 240px;
                font-family: 'SVN-Gilroy';
                font-style: normal;
                font-weight: 700;
                line-height: 125%;
                letter-spacing: 6px;
            }
        }
        &-desp{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 638px;
            padding: 40px;
            gap: 10px;
            border-radius: 15px;
            background: var(--green-20, #DDEBDE);
            margin: 100px 0 120px 0;
            &-value{
                color: var(--agribank-green, #00783A);
                text-align: center;
                font-size: 32px;
                font-family: 'SVN-Gilroy';
                font-style: normal;
                font-weight: 700;
                line-height: 150%;
            }
            &-service{
                color: var(--black-100, #222);
                text-align: center;
                font-size: 36px;
                font-family: 'SVN-Gilroy';
                font-style: normal;
                font-weight: 700;
                line-height: 150%;
            }
        }
        &-bottom{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            &-value{
                color: var(--black-60, #717171);
                text-align: center;
                font-size: 32px;
                font-family: 'SVN-Gilroy';
                font-style: normal;
                font-weight: 500;
                line-height: 150%;
            }
        }
    }
`

export {
    WrapInfoBill,
    Wrap
}