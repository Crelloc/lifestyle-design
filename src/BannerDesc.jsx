import React from 'react';
import styled from 'styled-components';
import {Text, Div,  Button, Icon} from 'atomize';
    
const BannerDesc = ({title, para}) => {
    return (<Div
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
        </Div>);
};

export default BannerDesc;


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