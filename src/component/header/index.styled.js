const { styled } = require("styled-components");

const WrapHeader = styled.div`
    background: #5F0505;
    display: flex;
    justify-content: space-between;
    z-index: 21;
    padding: 40px 60px;
    border-bottom: 12px solid var(--agribank-green, #00783A);

    span{
        color: #fff;
        font-family: 'SVN-Gilroy';
        font-style: normal;
    }
    .header-left{
        display: flex;
        flex-direction: column;
        line-height: 150%;
        gap: 20px;
        .time{
            font-size: 24px;
            font-weight: 500;
        }
        .name-office{
            font-size: 32px;
            font-weight: 700;
        }
    }
    .header-right{
        display: flex;
        align-items: center;
        gap: 6px;
        img{
            width: 47px;
            height: 47px;
        }
        .name-bank{
            letter-spacing: 2px;
            font-size: 40px;
            font-weight: 600;
        }
    }
`

export {
    WrapHeader
}