import { styled } from "styled-components";
import PageBg from "../PageBg/index.styled";

const Wrap = styled(PageBg)``;

const WrapFingerScan = styled.div`
  .content {
    &-finger {
      &-default {
        display: flex;
        flex-direction: column;
        gap: 74px;
        margin-top: 60px;
        align-items: center;
        padding: 0 120px;
        &-value {
          color: var(--white, #fff);
          text-align: center;
          font-family: SVN-Gilroy;
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
        }
      }
      &-check {
        &-default {
          display: flex;
          flex-direction: column;
          gap: 64px;
          margin: 95px 0 46px 0;
          align-items: center;
          .image {
            border: 3px dashed #fff;
            border-radius: 50%;
            padding: 25px;
            background: rgba(1, 1, 1, 0.4);
          }
          &-value {
            color: var(--background, #fafafa);
            text-align: center;
            font-family: SVN-Gilroy;
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
          }
        }
        &-success {
          display: flex;
          flex-direction: column;
          gap: 64px;
          margin: 95px 0 46px 0;
          align-items: center;
          .image-success {
            border: 2.05px dashed var(--secondary-100, #007822);
            border-radius: 50%;
            background: rgba(1, 1, 1, 0.4);
            position: relative;
            .icon {
              position: absolute;
              top: -8%;
              right: -9%;
            }
          }
          .animation {
            transform: scale(2);
            width: 100%;
            height: 100%;
            svg {
              width: 250px !important;
              height: 250px !important;
            }
          }
        }
      }
    }
  }
`;

export { WrapFingerScan, Wrap };
