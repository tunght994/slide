import styled, { css } from "styled-components";

const InputTextWrapper = styled.div`
    height: ${props => props.heightInput || "66px"};
    width: 100%;
    
    .wrap-input{
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        border: 0.9px solid #676767;
        transition: border-color 0.3s ease;
        border-radius: 9px;
        gap: 11px;
        padding: 16px;
        box-sizing: border-box;
        background: #FFFFFF;
        ${props => props.isDisabled ? css`pointer-events: none; background: #EDEDED; border: none;` : null}
        ${props => props.isFocus ? css`border-color: #007822;` : null}
        
        input{
            font-family: "SVN-Gilroy";
            height: 100%;
            width: calc(100% - 51px);
            box-sizing: border-box;
            /* padding: 10px; */
            font-weight: 500;
            appearance: none;
            outline: none;
            ${props => props.isDisabled ? css`color: #676767;` : css`color: #010101;`}
            font-size: 24px;
            line-height: 120%;
            border: none;
            background: inherit;
            
        }
        &.focus, &.active, &.error-input{
            .placeholder{
                top: 0;
                font-size: 18px;
                color: #676767;
                ${props => props.isDisabled ? css`background: none;` : css`background: #fff;`}
                width: auto;
                left: 18px;
            }
            
        }
        &.focus{
            .placeholder{
                color: #000;
                /* color: #007822; */
                .note{
                    /* display: none; */
                }
            }
        }
        &.active{
            .placeholder{
                color: #676767;
                .note{
                    /* display: none; */
                }
            }
            
        }
        &.error-input{
            border: 0.9px solid #CB2600;
            .placeholder{
                color:  #CB2600;
                top: 50%;
                font-size: 24px;
                left: 51px;
            }
           
        }
        &.error-input-value{
            border: 0.9px solid #CB2600;
            .note{
                /* display: none; */
            }
            .placeholder{
                color:  #CB2600;
                font-size: 18px;

            }
        }
        .placeholder{
            position: absolute;
            left: 51px;
            top: 50%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            box-sizing: border-box;
            transform: translateY(-50%);
            color: #676767;
            font-family: 'SVN-Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            padding: 0 5px;
            transition: 
                top 0.3s ease,
                left 0.3s ease,
                color 0.3s ease,
                font-size 0.3s ease;
        }
        .note{
            color: #CB2600;
            margin-left: 6px;
        }
    }
    .error{
        color:  #CB2600;
        font-family: "SVN-Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        padding: 2px 0 0 14px;
    }
`

export {InputTextWrapper};