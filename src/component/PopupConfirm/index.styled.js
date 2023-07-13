import styled from "styled-components";

const WrapPopupComfirm = styled.div`
  background: #fff;
  padding: 60px;
  display: flex;
  width: 870px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.07);
  .title {
    color: var(--black-100, #010101);
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .desc {
    color: var(--black-100, #010101);
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%; /* 45px */
    margin: 30px 0 60px 0;
  }
  .btn {
    display: flex;
    gap: 60px;

    &-end {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 18px;
      background: var(--primary-100, #ae1c3f);
      border-radius: 24px;
      font-weight: 700;
      font-size: 36px;
      text-transform: uppercase;
      color: #ffffff;
      cursor: pointer;
      width: 360px;
      height: 108px;
    }
    &-next {
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
      color: #ffffff;
      cursor: pointer;
      width: 360px;
      height: 108px;
    }
  }
  .warning{
    color: var(--status-error, #FF2028);
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%; /* 40px */
    margin: 60px 0 0 0;
  }
`;

export { WrapPopupComfirm };
