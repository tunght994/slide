import { styled } from "styled-components";

const WrapFormTransactionReceipt = styled.div`
    width: 646px;
    /* height: 554px; */
    padding: 32px;
    background: #fff;
    font-family: SVN-Gilroy;
    font-style: normal;
    .content{
        &-header{
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 68px;
            &-right{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 8px;
                .name-office{
                    color: var(--black-100, #222);
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 28px;
                }
                .time{
                    opacity: 0.8;
                    color: var(--black-100, #010101);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 22px;
                }
            }
        }

        &-number{
            height: 191px;
            border: 1px solid #000;
            border-radius: 10px;
            position: relative;
            &-transaction{
                position: absolute;
                top: -20px;
                left: 33%;
                width: 34%;
                text-align: center;
                background: #fff;
                text-transform: uppercase;
                

                color: var(--black-100, #222);
                text-align: center;
                font-size: 24px;
                font-weight: 400;
                line-height: normal;
            }
            &-bill{
                color: #000620;
                text-align: center;
                font-size: 124px;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 4.556px;
            }

        }

        &-desp{
            margin: 40px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;

            &-value{
                color: #000;
                font-size: 24px;
                font-weight: 400;
                line-height: 28px;
            }
            &-service{
                color: #000;
                font-size: 24px;
                font-weight: 700;
                line-height: 28px;
            }
        }

        &-bottom{
            color: #000620;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            line-height: 22px;
        }
        
    }
`

export {
    WrapFormTransactionReceipt
}