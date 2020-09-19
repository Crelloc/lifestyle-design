import React from 'react';
import styled from 'styled-components';
import {Text, Div,  Button, Icon} from 'atomize';

const arrObj = {
    'VaporMax 2020s and More': {
        slug: '/VaporMax-2020s-and-More',
        imgSrc: '../images/vapor-max-2020s.jpg'
    },
    'What\'s New & What\'s Coming': {
        slug: '/What\'s-New-&-What\'s-Coming',
        imgSrc: '../images/whats-new-and-whats-coming.jpg'
    }
}

const title = "Trending";

const columns = Object.entries(arrObj);

const Trending2 = (props) => {

    return (

        <Container>
            <BannerTitle>
                <h2>
                    {title}
                </h2>
            </BannerTitle>
            <SectionContainer>
                <MediaContainerLeft>
                    <img src={columns[0][1].imgSrc} alt={columns[0][0]}></img>
                    <Div
            pos="relative"
            w={{xs: "80%", md: "70%"}}
        >
            <BottomLeft1> 
                <BannerTitle1>
                    <Text
                        textSize={{xs: "bannerSizeSm"}}
                    >
                        {columns[0][0]}
                    </Text>
                </BannerTitle1>
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
                </MediaContainerLeft>
                <MediaContainerRight>
                <img src={columns[1][1].imgSrc} alt={columns[1][0]}></img>
                    <Div
            pos="relative"
            w={{xs: "80%", md: "70%"}}
        >
            <BottomLeft1> 
                <BannerTitle1>
                    <Text
                        textSize={{xs: "bannerSizeSm"}}
                    >
                        {columns[1][0]}
                    </Text>
                </BannerTitle1>
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
                </MediaContainerRight>

            </SectionContainer>
        </Container>

    );

};

export default Trending2;

const BottomLeft1 = styled.div`
    width: 100%;
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

const SectionContainer = styled.div`
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 1024px){
        height: 700px;
    }
    @media screen and (max-width: 639px){
        flex-direction: column;
    }
`;

const MediaContainerLeft = styled.div`
    position: relative;
    width: 50%;
    margin-right: 8px;

    @media screen and (min-width: 1024px){
        height: 100%;
    }
    
    @media screen and (min-width: 640px) and (max-width: 1024px){
        height: 500px;
    }

    @media screen and (max-width: 639px){
        width: 100%;
        margin-right: 0;
        height: 500px;
    }

    img {
        opacity: 1;
        object-position: 50% 50%;
        display: block;
        max-width: 100%;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`;

const MediaContainerRight = styled.div`
    position: relative;
    width: 50%;
    margin-left: 8px;

    @media screen and (min-width: 1024px){
        height: 100%;
    }

    @media screen and (min-width: 640px) and (max-width: 1024px){
        height: 500px;
    }

    @media screen and (max-width: 639px){
        width: 100%;
        margin-left: 0;
        margin-top: 16px;
        height: 500px;
    }

    img {
        opacity: 1;
        object-position: 50% 50%;
        display: block;
        max-width: 100%;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`;


const Container = styled.div`
    margin: 84px auto 0;
    width: 100%;
    position: relative;    
`;

const BannerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 24px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

    h2 {
        margin-right: auto;
        color: #111;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.16667;
    }
`;