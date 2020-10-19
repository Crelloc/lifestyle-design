import React from 'react';
import styled from 'styled-components';
import {Text} from 'atomize';
import MyButton from './MyButton.jsx';
    
const BannerDesc = ({title, para, fullwidth}) => {
    return (<Shell>
            <BottomLeft1> 
                <BannerTitle1 fullwidth={fullwidth}>
                    <Text
                        textSize={{xs: "bannerSizeSm", lg: fullwidth && "bannerSizeLg"}}
                    >
                        {title}
                    </Text>
                </BannerTitle1>
                <BannerParagraph1> {para}</BannerParagraph1>
                <MyButton/>
            </BottomLeft1>
        </Shell>);
};

export default BannerDesc;

const Shell = styled.div`
    position: relative;
    @media only screen and (max-width: 639px){
    width: calc(100% - 48px);
    }
    @media only screen and (min-width: 640px){
      width: 60%;

    }
    @media only screen and (min-width: 1024px){
        width: 60%;
    }
    @media only screen and (min-width: 1920px){
       
    }
`;

const BottomLeft1 = styled.div`
    position: absolute;
    justify-content: flex-end;
    text-alignment: left;
    left: 36px;
    height: 33.33333%;
    display: flex;
    flex-direction: column;
    color: white;
    word-wrap: break-word;
    top: calc(66.66667% - 36px);
    ${'' /* top: calc(95% - 36px); */}
    .Button1 {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin-top: 18px;
        color: black;
    }

    @media only screen and (max-width: 639px){
        position: relative;
        left: 0px;
        top: 0;
        height: 100%;
        color: black;
        margin: 0;
        .Button1 {
            color: white;
        }
        margin-top: 24px;
    }
`;

const BannerTitle1 = styled.h1`
    position: relative;
    line-height: .833333;
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
    margin-bottom: 8px;

    @media only screen and (max-width: 639px){
    
    }
    @media only screen and (min-width: 640px){

    }
    @media only screen and (min-width: 1024px){
        
    }
    @media only screen and (min-width: 1920px){
       
    }
`;
const BannerParagraph1 = styled.p`
    position: relative;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
`;