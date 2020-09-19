import React from 'react';
import {Div} from 'atomize';
import Banner from './Banner.jsx';
import MustHaves from './Must-Haves.jsx';
import Trending from './Trending.jsx';

import './styles.css'

const App = () => {
    return (
        <Div
            d="flex"   
            w="auto"
            flexDir="column"
            m={{xs: "84px 16px 0 16px", md: "84px 12px 0 12px", lg: "84px auto 0px auto"}}
            pos="relative"
            maxW="1808px"
            overflow="auto"
        >
            <Banner
                mainTitle="The Latest And Greatest" 
                imgSrc="../images/banner1.webp"
                imgAlt="nike showcase"
                title="Banner Title sdfdsdfdsf sfsadf"
                para="Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="0 auto"
            />
            <Banner
                mainTitle="You Got This" 
                imgSrc="../images/nike-just-do-it.jpg"
                imgAlt="nike soccer"
                title="Gear Up For Soccer asfddsf"
                para="Everything you'll need to get serious with the back of the net. Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
            />
            <MustHaves />
            <Trending />
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
        </Div>
    );
};

export default App;