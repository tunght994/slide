import { styled } from "styled-components";
import PageBg from "../PageBg/index.styled";

const Wrap = styled(PageBg)``

const WrapHome = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: 'SVN-Gilroy';
    font-style: normal;
    .header{
        text-align: center;
        margin: 120px 0;
        &-title{
            font-size: 30px;
            font-weight: 500;
            line-height: 150%;
        }
        &-desp{
            font-size: 52px;
            font-weight: 700;
            line-height: 150%;
        }
    }
    .content{
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 40px;
        color: var(--agribank-red, #AB1F24);
        font-size: 36px;
        font-weight: 700;
        &-item{
            width: calc(500px - 64px);

            .general{
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 24px 32px;
                background: #fff;
            }
            &-left{
                border-radius: 0px 130px 130px 0px;
            }
            &-right{
                justify-content: flex-end;
                border-radius: 130px 0px 0px 130px;
            }
        }
    }
    .btn{
        width: 160px;
        padding: 24px 32px;
        margin: 400px 0 0 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border-radius: 80px;
        background: var(--gradient-primary, linear-gradient(180deg, #AB1F24 0%, #900F14 100%));
        span{
            color: var(--white, #FFF);
            font-size: 32px;
            font-family: SVN-Gilroy;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            text-transform: uppercase;
        }
    }
`

export {
    WrapHome,
    Wrap
}