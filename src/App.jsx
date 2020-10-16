import React from 'react';
import {Div} from 'atomize';
import styled from 'styled-components';
import Banner from './Banner.jsx';
import MustHaves from './Must-Haves.jsx';
import Trending from './Trending.jsx';
import BestSellers from './BestSellers.jsx';
import Featured from './Featured.jsx';

import './styles.css'

const App = () => {
    return (
        <Shell>
            <Banner
                mainTitle="The Latest And Greatest" 
                imgSrc="../images/banner1.webp"
                imgAlt="nike showcase"
                title="Check the fresh gear"
                para="Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
                maxHeight="428px"
                // maxHeight="900px"
            />
            <Banner
                mainTitle="You Got This" 
                imgSrc="../images/nike-just-do-it.jpg"
                imgAlt="nike soccer"
                title="Gear Up For Soccer asfddsf"
                para="Everything you'll need to get serious with the back of the net. Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
                // maxHeight="900px"
                maxHeight="428px"
            />
            <MustHaves />
            <Trending />
            <Featured />
            <BestSellers />
            <Div 
                id="callToAction-container"
                bg="success500"
                m="84px 0 0"
            >
                    Call to action section
            </Div>
            <Div
                id="banner2-container"
                bg="success400"
                m="84px  0px 0"
            >
                    Banner2 section
            </Div>
            <Div
                id="featuredItems-container"
                bg="success300"
                m="84px  0px 0"
            >
                    Featured items section
            </Div>
        </Shell>
    );
};

export default App;

const Shell = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: relative;
    ${'' /* max-width: 1808px; */}
    max-width: 1000px;
    overflow: auto;
    margin: 0 12px;

    @media only screen and (max-width: 639px){
        max-width: calc(100vw - 32px);
        ${'' /* margin: 0 16px; */}
        margin: 0;
    }
    @media only screen and (min-width: 640px){
        max-width: calc(100vw - 32px);
        ${'' /* margin: 0 16px; */}
        margin: 0;

    }
    @media only screen and (min-width: 1024px){
        max-width: 1000px;
        margin: 0 48px;
    }
    @media only screen and (min-width: 1920px){
        ${'' /* max-width is 1000px, from the previous screen setting */}
        margin: 0 auto;
    }



`;