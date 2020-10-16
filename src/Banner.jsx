import React from 'react';
import styled from 'styled-components';
import {Div} from 'atomize';
import BannerDesc from './BannerDesc';



const Banner = ({imgSrc, imgAlt, title, para, m, mainTitle, maxHeight}) => {
    return (
        <Div w="100%" m={m}>
            <BannerTitle> <h2>{mainTitle}</h2> </BannerTitle>
            <Div bg="success600" p="0 0" h={{xs: maxHeight}} pos="relative" w="100%"
            // h={{xs: "500px", md: "700px", lg: maxHeight}}
            >  
                <MediaContainer1>
                    <img src={imgSrc} alt={imgAlt}></img>
                </MediaContainer1>
                <BannerDesc title={title} para={para}/>
            </Div>
        </Div>
    );
}

export default Banner;

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