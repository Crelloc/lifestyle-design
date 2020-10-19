import React from "react";
import Banner from './Banner.jsx';

const Featured = ({fullwidth}) => {
    return (<Banner
        mainTitle="Featured" 
        imgSrc="../images/featured.jpg"
        imgAlt="nike neon"
        title="Bold And Bright Next Line"
        para="Show off your confidence in neon."
        m="84px auto 0"
        maxHeight={fullwidth? "700px" : "428px"}
        fullwidth={fullwidth}
    />);
};

export default Featured;