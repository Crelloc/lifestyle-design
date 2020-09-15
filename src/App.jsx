import React from 'react';
import styled from 'styled-components';
import {Div,  Button, Icon} from 'atomize';
import './styles.css'

const BottomLeft1 = styled.div`
    position: absolute;
    justify-content: flex-end;
    text-alignment: left;
    left: 36px;
    width: 40%;
    height: 33.33333%;
    display: flex;
    flex-direction: column;
    color: white;
    word-wrap: break-word;
    top: calc(66.66667% - 36px);
    ${'' /* top: calc(95% - 36px); */}
    #Button1 {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin-top: 18px;
        color: black;
        width: 20%;
    }
`;

const BottomLeft2 = styled.div`
    position: absolute;
    justify-content: flex-end;
    text-alignment: left;
    left: 36px;
    width: 40%;
    height: 33.33333%;
    display: flex;
    flex-direction: column;
    color: white;
    word-wrap: break-word;
    top: calc(66.66667% - 36px);
    #Button2 {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin-top: 18px;
        color: black;
        width: 20%;
    }
`;

const BannerTitle1 = styled.h1`
    position: relative;
    font-size: 72px;
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

const App = () => {
    return (
        <Div
            d="flex"
            w="auto"
            flexDir="column"
            m="84px 48px 0px 48px"
            pos="relative"
        >
            <Div
                id="banner1-container"
                bg="success600"
                p="0 0"
                maxH="auto"
                overflow=""
                pos="relative"
            >  
                    <img src="../images/banner1.webp" alt="nike showcase" style={{objectFit: "fill", width: "100%", height: "auto"}}></img>

                <BottomLeft1> 
                <BannerTitle1>Banner Title</BannerTitle1>
                <BannerParagraph1> Banner Paragraph</BannerParagraph1>
                <Button
                    id="Button1"
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
                    p={{ r: "1.5rem", l: "1rem" }}
                    shadow="3"
                    hoverShadow="4"
                >
                    Shop
                </Button>
                </BottomLeft1>
            </Div>
            <Div
                id="banner2-container"
                bg="success600"
                p="0 0"
                maxH="700px"
                pos="relative"
                overflow="hidden"
                m={{lg: "84px 0 0"}}
            >  
                    <img src="../images/banner1.webp" alt="nike showcase" style={{objectFit: "fill", width: "100%", height: "auto"}}></img>

                <BottomLeft2> 
                <BannerTitle1>Banner Title</BannerTitle1>
                <BannerParagraph1> Banner Paragraph</BannerParagraph1>
                <Button
                    id="Button2"
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
                    p={{ r: "1.5rem", l: "1rem" }}
                    shadow="3"
                    hoverShadow="4"
                >
                    Shop
                </Button>
                </BottomLeft2>
            </Div>

            <Div 
                id="callToAction-container"
                bg="success500"
                m={{lg: "84px 0 0"}}
                p={{lg: "0 8px"}}
            >
                    Call to action section
            </Div>
            <Div
                id="banner2-container"
                bg="success400"
                m={{lg: "84px  0px 0"}}
                p={{lg: "0 8px"}}
            >
                    Banner2 section
            </Div>
            <Div
                id="featuredItems-container"
                bg="success300"
                m={{lg: "84px  0px 0"}}
                p={{lg: "0 8px"}}
            >
                    Featured items section
            </Div>
        </Div>
    );
};

export default App;