import React from 'react';
import styled from 'styled-components';

const arrObj = {
    'Women\'s': {
        slug: '/Women\'s-Best',
        imgSrc: '../images/womens.jpg',
        alt: 'Nike Best Selling'
    },
    'Men\'s': {
        slug: '/Men\'s-Best',
        imgSrc: '../images/mens.jpg',
        alt: 'Nike Best Selling'
    },
    'Kids\'': {
        slug: '/Kids\'-Best',
        imgSrc: '../images/kids.jpg',
        alt: 'Nike Best Selling'
    }
}

const images = Object.entries(arrObj);
const title = "Best Sellers";

const BestSellers = () => {
    return (
        <MainContainer>
            <BannerTitle>
                <h2>
                    {title}
                </h2>
            </BannerTitle>
            <SectionContainer>
                <SwiperSlide>
                <ProductSlide>
                    <a href={images[0][1].slug}>
                        <img src={images[0][1].imgSrc} alt={images[0][1].alt}></img>

                        <ProductInfo>
                        <div>
                            <h4>{images[0][0]}</h4>
                        </div>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ProductSlide>
                    <a href={images[1][1].slug}>
                        <img src={images[1][1].imgSrc} alt={images[1][1].alt}></img>

                        <ProductInfo>
                        <div>
                            <h4>{images[1][0]}</h4>
                        </div>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ProductSlide>
                    <a href={images[2][1].slug}>
                        <img src={images[2][1].imgSrc} alt={images[2][1].alt}></img>

                        <ProductInfo>
                        <div>
                            <h4>{images[2][0]}</h4>
                        </div>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
            </SectionContainer>
        </MainContainer>
    );
};

export default BestSellers;

const MainContainer = styled.div`
    margin: 84px auto 0;
    position: relative;
    width: 100%;
    overflow: hidden;
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

const SectionContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    z-index: 0;
    transition-property: transform;
    white-space: nowrap;
`;

const SwiperSlide = styled.div`
position: relative;
    margin-right: 8px; 
    height: 100%;
    width: 300px;
    flex-shrink: 0;
    transition-property: transform;
    @media only screen and (min-width: 640px){
        width: 330px;
        margin-right: 16px;
    }
    @media only screen and (min-width: 1024px){
        width:  calc((100% - 32px)/3);
        margin-right: 16px;
        ${'' /* max-width: 586px; */}
    }
`;

const ProductInfo = styled.div`
	background-color: #fff;
	color: #111;
	bottom: 0;
	margin: 12px 16px 0 0;
	display: flex;
	flex-direction: column;
	position: relative;
	left: 0;
	right: 0;
	white-space: pre-line;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	text-align: left;

    @media only screen and (min-width: 640px){
        flex-direction: row;
        justify-content: space-between;
    }

    div h4{
        color: #111;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
    }
    div p {
	    color: #757575;
        font-size: 16px;
        line-height: 1.5;
    }
`;

const ProductSlide = styled.div`
    
    min-height: 300px;
    animation: 2s ease-in;
    a:first-child {
	    display: block;
	    min-height: 300px;
    }
    a {
        color: #111;
        cursor: pointer;
        text-decoration: none;
        font-weight: 500;
    }
    a img {
        user-select: none;
        opacity: 1;
        transition: opacity .35s ease-out;
        background-color: #fff;
        pointer-events: auto !important;
        max-width: 100%;
        display: block;

        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
`;
