import React from 'react';
import styled from 'styled-components';
import {Text, Div,  Button, Icon} from 'atomize';



const Banner = ({imgSrc, imgAlt, title, para, m, mainTitle}) => {
    return (
        <Div w="100%" m={m}>
            <BannerTitle>
                <h2>{mainTitle}</h2>
            </BannerTitle>
            <Div
        bg="success600"
        p="0 0"
        h={{xs: "500px", md: "700px", lg: "900px"}}
        pos="relative"
        // m={m}
        w="100%"
    >  
        <MediaContainer1>
            <img src={imgSrc} alt={imgAlt}></img>
        </MediaContainer1>
        <Div
            pos="relative"
            w={{xs: "100%", md: "40%"}}
        >
            <BottomLeft1> 
                <BannerTitle1>
                    <Text
                        textSize={{xs: "bannerSizeSm", lg: "bannerSizeLg"}}
                    >
                        {title}
                    </Text>
                </BannerTitle1>
                <BannerParagraph1> {para}</BannerParagraph1>
                <Div
                    pos="relative"
                >
                    <Button
                        className="Button1"
                        prefix={
                        <Icon
                            name="Bag"
                            size="16px"
                            color="black"
                            m={{ r: "0.5rem" }}
                        />
                        }
                        bg="gray300"
                        hoverBg="gray400"
                        rounded="circle"
                        h="3rem"
                        p={{ r: "1.5rem", l: "1.5rem", t: "1.5rem", b: "1.5rem" }}
                        shadow="3"
                        hoverShadow="4"
                    >
                        Shop
                    </Button>
                </Div>
            </BottomLeft1>
        </Div>
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
`;

const BannerTitle1 = styled.h1`
    position: relative;
    line-height: .833333;
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
    margin-bottom: 8px;
`;
const BannerParagraph1 = styled.p`
    position: relative;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
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