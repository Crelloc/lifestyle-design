import React from 'react';
// import {Div} from 'atomize';
import styled from 'styled-components';
import Banner from './Banner.jsx';
import MustHaves from './Must-Haves.jsx';
import Trending from './Trending.jsx';
import BestSellers from './BestSellers.jsx';
// import BestSellers2 from './BestSellers2.jsx';
import Featured from './Featured.jsx';
import Footer from './Footer.jsx';

import './styles.css'

const fullwidth = false;

const App = () => {
    return (
        <Shell fullwidth={fullwidth}>
            <Banner
                mainTitle="The Latest And Greatest" 
                imgSrc="https://cdn1.bigcommerce.com/server1200/713e0/product_images/uploaded_images/banner3.jpg"
                imgAlt="nike showcase"
                title="Check the fresh gear"
                para="Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
                maxHeight={fullwidth? "900px" : "600px"}
                fullwidth={fullwidth}
            />
            <Banner
                mainTitle="You Got This" 
                imgSrc="../images/nike-just-do-it.jpg"
                imgAlt="nike soccer"
                title="Gear Up For Soccer asfddsf"
                para="Everything you'll need to get serious with the back of the net. Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
                maxHeight={fullwidth? "900px" : "428px"}
                fullwidth={fullwidth}
            />
            <MustHaves />
            <Trending fullwidth={fullwidth}/>
            <Featured fullwidth={fullwidth}/>
            <BestSellers />
            <Footer />
            {/* <Banner
                mainTitle="The Latest And Greatest" 
                imgSrc="../images/graffiti1.jpg"
                imgAlt="nike showcase"
                title="Check the fresh gear"
                para="Everything you'll need to get serious with the back of the net.Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
                maxHeight={fullwidth? "900px" : "428px"}
                fullwidth={fullwidth}
            />
            <BestSellers2 />

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
            </Div> */}
        </Shell>
    );
};

export default App;

const Shell = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
    position: relative;
    max-width: ${props => props.fullwidth ? "1808px" : "1000px"};
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
       
        max-width: ${props => props.fullwidth ? "1808px" : "1000px"};
        margin: 0 48px;
    }
    @media only screen and (min-width: 1920px){
        ${'' /* max-width is 1000px, from the previous screen setting */}
        margin: 0 auto;
    }



`;
