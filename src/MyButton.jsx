/* eslint-disable react-hooks/rules-of-hooks */

//needed to add above command because visual studio didn't recognize this component
import React from 'react';
import {Div, Button, Icon} from 'atomize';
// import { //https://www.npmjs.com/package/react-device-detect
//     BrowserView,
//     MobileView,
//     isBrowser,
//     isMobile
//   } from "react-device-detect";
  import { useMediaQuery } from 'react-responsive';

// console.log(isMobile, isBrowser); //would need to test on actual device

const myButton = ({Trending}) => {

    const Mobile = useMediaQuery({ query: '(max-width: 639px)' });
    console.log(Trending);
    return (
        <Div pos="relative">
            <Button className="Button1" prefix={ <Icon name="Bag" size="16px" color={(Mobile && !Trending) ? "white" : "black"} m={{ r: "0.5rem" }}/>}
                bg={(Mobile && !Trending) ? "black" : "gray300"}
                hoverBg="gray400"
                rounded="circle"
                // h="3rem"
                // p={{ r: "1.5rem", l: "1.5rem", t: "1.5rem", b: "1.5rem" }}
                // p="1.5rem"
                shadow="3"
                hoverShadow="4"
            >
                Shop
            </Button>
        </Div>
    );

};

export default myButton;
