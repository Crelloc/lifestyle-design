import React, {useState, useEffect} from 'react';
// import {Div} from 'atomize';
import styled from 'styled-components';
import Banner from './Banner.jsx';
import MustHaves from './Must-Haves.jsx';
import Trending from './Trending.jsx';
import BestSellers from './BestSellers.jsx';
import Header from './Header.jsx';
import Featured from './Featured.jsx';
import Footer from './Footer.jsx';

import './styles.css'


const App = () => {

    function useLocalState(key, initial){
        const [state, setState] = useState(() => {
            if (typeof window !== "undefined"){
                const saved = window.localStorage.getItem(key);
                if (saved !== null){
                    return JSON.parse(saved);
                }
            }
            return initial;
        });

        useEffect(()=>{
            window.localStorage.setItem(key, JSON.stringify(state));
        }, [state]);
        return [state, setState];
    }

    const [fullwidth, setFullWidth] = useLocalState("localstorage",true);

    return (
        <Shell fullwidth={fullwidth}>
            <Header SetWidth={setFullWidth} isExpaned={fullwidth}/>
            <Banner
                mainTitle="Stay Tuned" 
                imgSrc="./images/banner1.webp"
                imgAlt="nike showcase"
                title="Check the fresh gear"
                para=""
                m="84px auto 0"
                maxHeight={fullwidth? "900px" : "600px"}
                fullwidth={fullwidth}
            />
            <Banner
                mainTitle="You Got This" 
                imgSrc="../images/nike-just-do-it.jpg"
                imgAlt="nike soccer"
                title="Gear Up For Soccer"
                para="Everything you'll need to get serious with the back of the net."
                m="84px auto 0"
                maxHeight={fullwidth? "900px" : "428px"}
                fullwidth={fullwidth}
            />
            <MustHaves />
            <Trending fullwidth={fullwidth}/>
            <Featured fullwidth={fullwidth}/>
            <BestSellers />
            <Footer />
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
