import React from "react";
import Banner from './Banner.jsx';

const Featured = (props) => {
    return (<Banner
        mainTitle="Featured" 
        imgSrc="../images/featured.jpg"
        imgAlt="nike neon"
        title="Bold And Bright Next Line"
        para="Show off your confidence in neon."
        m="84px auto 0"
        // maxHeight="700px"
        maxHeight="428px"

    />);
};

export default Featured;