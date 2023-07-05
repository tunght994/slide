import { styled } from "styled-components";

import bg from '../../images/img/BG.png'

const PageBg = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* position: relative; */
`;

export default PageBg