import styled from "styled-components";

const WrapOverlayFullScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    min-width: 100vw;
    width: 100%;
    background: rgba(1, 1, 1, 0.75);
    z-index: 99;
    overflow: auto;
    overflow: overlay;

    /* width: 100%;
    --offset-reduce: 170px;
    --total-offset: calc(
    var(--offset-keyboard) + var(--offset-reduce)
    );
    transform: translateY(
    calc(var(--total-offset) * var(--offset-keyboard-on))
    );
    transition: background-color 0.3s, box-shadow 0.3s, transform 4s; */

    .wrap-inner-screen {
        width: 100%;
        /* height: 100%; */
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`
export {
    WrapOverlayFullScreen
}