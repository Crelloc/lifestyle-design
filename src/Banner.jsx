import React from 'react';
import styled from 'styled-components';
import {Div} from 'atomize';
import BannerDesc from './BannerDesc';
// import { //https://www.npmjs.com/package/react-device-detect
//     BrowserView,
//     MobileView,
//     isBrowser,
//     isMobile
//   } from "react-device-detect";


const Banner = ({imgSrc, imgAlt, title, para, m, mainTitle, maxHeight, fullwidth}) => {
    return (
        <Div w="100%" m={m}>
            <BannerTitle> <h2>{mainTitle}</h2> </BannerTitle>
            <CustomDiv maxHeight={maxHeight}>  
                <MediaContainer1>
                    <img src={imgSrc} alt={imgAlt}></img>
                </MediaContainer1>
            </CustomDiv>
            <BannerDesc title={title} para={para} fullwidth={fullwidth}/>
        </Div>
    );
}

export default Banner;

const CustomDiv = styled.div`
    padding: 0;
    position: relative;
    width: 100%;

    @media only screen and (max-width: 639px){
        height: 428px;
    }
    @media only screen and (min-width: 640px){
        height: 428px;
    }
    @media only screen and (min-width: 1024px){
       height: ${props => props.maxHeight};
    }
    @media only screen and (min-width: 1920px){
        height: ${props => props.maxHeight};
    }
`;

const BannerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 24px;

    h2 {
        margin-right: auto;
        color: #111;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.16667;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
`;

const MediaContainer1 = styled.div`
    width: 100%;
    height: 100%;
 
    position: relative;
    img {
        object-fit: cover;
        object-position: 50% 50%;
        display: block;
        transition: opacity 1s ease .3s;
        opacity: 1;
        margin: 0;
        padding: 0;
        border: 0;
        width: 100%;
        height: 100%; 
    }
`;