import React from 'react';
import styled from 'styled-components';

const arrObj = {
    'Jordan Delta': {
        slug: '/Jordan-Delta',
        imgSrc: '../images/jordan-delta-mens-shoe-jpSKRQ.jpg',
        category: `Men's Shoe`,
        price: '$130'
    },
    'Nike Air Max Verona': {
        slug: '/Nike-Air-Max-Verona',
        imgSrc: '../images/air-max-verona-womens-shoe-JF64LJ.jpg',
        category: "Women's Shoe",
        price: '$120'
    },
    "Nike Air Force 1 '07 Craft": {
        slug: '/Nike-Air-Force-1-\'07-Craft',
        imgSrc: '../images/air-force-1-07-craft-mens-shoe-k55nxC.jpg',
        category: "Men's Shoe",
        price: '$120'
    },
    'Nike Air Max 2090': {
        slug: '/Nike-Air-Max-2090',
        imgSrc: '../images/air-max-2090-womens-shoe-nk9ZbX.jpg',
        category: "Women's Shoe",
        price: '$150'
    }
}

const products = Object.entries(arrObj);

const MustHaves = (props) => {

    return (<Container>
        <BannerTitle>
            <h2>This Season's Must-Haves</h2>
            <a href="/Shop-All">Shop All</a>
        </BannerTitle>
        <SwiperWrapper>
            <SwiperSlide>
                <ProductSlide>
                    <a href={products[0][1].slug}>
                        <img src={products[0][1].imgSrc} alt={products[0][1].category}></img>

                        <ProductInfo>
                        <div>
                            <h4>{products[0][0]}</h4>
                            <p>{products[0][1].category}</p>
                        </div>
                        <p>{products[0][1].price}</p>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ProductSlide>
                    <a href={products[1][1].slug}>
                        <img src={products[1][1].imgSrc} alt={products[1][1].category}></img>

                        <ProductInfo>
                        <div>
                            <h4>{products[1][0]}</h4>
                            <p>{products[1][1].category}</p>
                        </div>
                        <p>{products[1][1].price}</p>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ProductSlide>
                    <a href={products[2][1].slug}>
                        <img src={products[2][1].imgSrc} alt={products[2][1].category}></img>

                        <ProductInfo>
                        <div>
                            <h4>{products[2][0]}</h4>
                            <p>{products[2][1].category}</p>
                        </div>
                        <p>{products[2][1].price}</p>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ProductSlide>
                    <a href={products[3][1].slug}>
                        <img src={products[3][1].imgSrc} alt={products[3][1].category}></img>

                        <ProductInfo>
                        <div>
                            <h4>{products[3][0]}</h4>
                            <p>{products[3][1].category}</p>
                        </div>
                        <p>{products[3][1].price}</p>
                        </ProductInfo>
                    </a>
                </ProductSlide>
            </SwiperSlide>
        </SwiperWrapper>
    </Container>
    );

};

export default MustHaves;

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
    a {
        margin-left: 20px;
        color: #111;
        padding: 0;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        text-decoration: none;
        font-size: 16px;
        line-height: 1.5;
        transition: all .2s ease;
    }
`;

const SwiperWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    overflow: auto;
    padding-bottom: 50px;
    scrollbar-color: lightgrey white;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }
    &::-webkit-scrollbar-thumb {
        background-color: lightgrey;
        border-radius: 20px;
        border: 3px solid white;
    }
    @media only screen and (max-width: 1024px) {
        padding-bottom: 0;

        &::-webkit-scrollbar {
            display: none;
        }
        
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`;

const SwiperSlide = styled.div`
    width: calc(100% - 85px);
   @media only screen and (min-width: 1024px) {
	    width: calc((100% - 144px)/3);
    }
    @media only screen and (min-width: 768px) {
	    width: calc((100% - 144px)/2);
    }
    max-width: 586px;
    margin-right: 16px;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;
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
    }
`;
