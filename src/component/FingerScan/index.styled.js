import { styled } from "styled-components";
import PageBg from "../PageBg/index.styled";

const Wrap = styled(PageBg)``

const WrapFingerScan = styled.div`
    .content{
        &-finger{

            &-default{
                display: flex;
                flex-direction: column;
                gap: 74px;
                margin-top: 60px;
                align-items: center;
                padding: 0 120px;
                &-value{
                    color: var(--white, #FFF);
                    text-align: center;
                    font-family: SVN-Gilroy;
                    font-size: 48px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 150%;
                }

            }
            &-check{
                &-default{
                    display: flex;
                    flex-direction: column;
                    gap: 64px;
                    margin: 154px 0 46px 0;
                    align-items: center;
                    &-value{
                        color: var(--background, #FAFAFA);
                        text-align: center;
                        font-family: SVN-Gilroy;
                        font-size: 36px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%;
                    }
                }
                &-success{
                    text-align: center;
                    margin: 46px 0 ;

                    .animation{
                        svg{
                            width: 100% !important;
                            height: 370px !important;
                        }
                    }
                }
            }
        }
    }
`

export {
    WrapFingerScan,
    Wrap
}