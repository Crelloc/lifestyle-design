import React from 'react';
import {Div, Button, Icon} from 'atomize';

const myButton = () => {

    return (
        <Div pos="relative">
            <Button className="Button1" prefix={ <Icon name="Bag" size="16px" color="black" m={{ r: "0.5rem" }}/>}
                bg="gray300"
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
